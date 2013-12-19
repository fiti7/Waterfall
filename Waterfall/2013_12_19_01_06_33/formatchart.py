# 
#  formatchart.py
#  Takes .dat file data and outputs .js files to run Highchart charts
#  
#
#  @author Etai Klein
#  Keynote Systems Intern
#   
#  Last modified 12/18/13
#  
 
import os
import pprint
import sys
import operator
import webbrowser
import glob
import ast

#which elements of the mapped data are we using?
elements = ["START_MSEC", "DNS_LOOKUP_MSEC", "CONNECT_DELTA", "SSL_HANDSHAKE_DELTA",
             "REDIR_DELTA", "REQUEST_DELTA", 
             "FIRST_BYTE_MSEC",
             #new elements can be added until this point
             #beyond here, the rest are referred to in order
            "CONN_STRING_TEXT", #the domain strings
             "MS_FIRST_PAINT_MSEC", "DOM_INTERACTIVE_MSEC", #rendered lines
             "PAGE_SEQ", "RECORD_SEQ", #transaction/page numbers
             "OBJECT_TEXT" #the page string
             ] 

#if you add new elements, make sure the colors match up

colors = ["\'transparent\'", "\'yellow\'", "\'orange\'", "\'pink\'", "\'light green\'", "\'dark green\'", 
          "\'light blue\'"]

# START_MSEC - white
# DNS_LOOKUP_MSEC - yellow
# CONNECT_DELTA - orange
# SSL_HANDSHAKE_DELTA - pink
# REDIR_DELTA - light green
# REQUEST_DELTA - Dark Green
# FIRST_BYTE_MSEC - light blue
# content download - how is this generated? - Blue
# client time - how is this generated? - Dark blue
# MS_FIRST_PAINT_MSEC - greenline
# DOM_INTERACTIVE_MSEC - redline


#written data manipulation section
#--------------------------------------------------


#the main data processing function
def main(source):
    lines = []
    #opens the .dat file and reads each lines to a list
    with open(source, "r") as f:
        try:
            items = f.readlines()
            
            #for each line
            for item in items:
                i = 0
                j = ""

                while (i < len(item)):
                    #find the '='
                    if item[i] == "=":
                        #there will be either 2 or 3 characters indicating the element
                        if item[i-3] == ' ':
                            #if it's 2 then slice it
                            j = item[i-2:i]
                            #and find the mapping
                            j = finditem(j)
                            if j!= None:
                                #and replace it
                                item = item[0:i-2] + j + item[i:-1]
                        else:  
                            #if it is 3 chars long
                            j = item[i-3:i]
                            #find the mapping
                            j = finditem(j)
                            if j!= None:
                                #and replace it
                                item = item[0:i-3] + j + item[i:-1]
                    i+=1
                lines.append(item)                  
                

            pass
        except:
            pass
        finally:
            return lines
        
#searches the map.txt file for an equivalent to a .dat file element
def finditem(input):
    with open(sys.argv[0] + "/../map.txt", "r") as f:
        try:
            items = f.readlines()
        
            j = 0
            while j < len(items):
                item = items[j]
                
                #these lines aren't useful to us
                #TODO: double check they aren't useful
                while (item[0] != ("C" or "T")):
                    item = items[j] 
                    j+=1
                                    
                #counts columns
                c = 0
                #iterates through string
                i = 0
                #current character
                l = ''
                
                #ignore what's before the first two columns
                while (c < 2 and item[i] != ''):
                    l = item[i]
                    if (l == '|'):
                        c+=1
                    i+=1
                
                #grab the next 2 or three characters
                l = item[i] + item[i+1]
                if item[i+2] != '|':
                    l = l + item[i+2]
                    i+=1
                
                #is it equal to my input string?
                if l == input:
                    i = i+3
                    r = ""
                    
                    #if so, see what it translates to.
                    while item[i]!= '|':
                        r = r + item[i]
                        i+= 1       
                    return r;
                j+=1
        except:
            pass

#Takes data from the mapping and organizes it into lists to be used as highchart data sets
def formatdata(data, elements):
    myarray = []
    
    #holds the MS_FIRST_PAINT_MSEC and DOM_INTERACTIVE_MSEC element data which has to be handled differently
    linearray = []
    #we want this in the form [[start, middle, end, label]...]
    
    #if it is a viable item (has an object text? )
    #pull out start time, connect delta, first packet
    
    #start with an array of entries
    for datum in data:
        newarray = [0] * len(elements)
        #now each element is its own array in that array
        datum = datum.split(" ")
        #print(datum)
        #now we have a tuple in each of those array of element : value 
        #example - [[[Header_byte,"510"],[element_delta,"3042]...]...]
        for item in datum:
            item = item.split("=")
            n=0
            # check and see if it matches
            while n < len(elements):
                if item[0] == elements[n]:
                    newarray[n] = (item[1].strip("\'").strip("\"")) 
                n+=1
        
        #add it to my my data structure if it's useful
        if newarray[-1] != 0 and newarray[-3] != 0:
            myarray.append(newarray)
        elif (newarray[-4] != 0 or newarray[-5] != 0):
            linearray.append(newarray)
    
    #sometimes it comes out of order- sorting it by time here. 
    myarray.sort(key=lambda x: int(x[0]))    

    #create a blank array with space for each element
    newarray = []
    for element in elements:
        newarray.append([])
        
    for item in myarray:
        i=0
        while (i < len(newarray)):
            newarray[i].append(item[i])
            i+=1
            
    return (newarray, linearray)

#gets the last pagesequence 
def getmax(inputarray):
    maxseq = 1

    #get the number of transactions
    i = 0
    while i < (len(inputarray[-3]) - 1):
        if int(inputarray[-3][i]) > maxseq:
            maxseq = int(inputarray[-3][i])
        i+= 1
    
    return maxseq

#change the data structure to hold a a list for each transaction containing a list of the important elements
#for example ["START_MSEC", "FIRST_PACKET_DELTA", "CONNECT_DELTA", "PAGE_SEQ", "OBJECT_TEXT"] is our array,
#now we have [["START_MSEC", "FIRST_PACKET_DELTA", "CONNECT_DELTA", "PAGE_SEQ", "OBJECT_TEXT"], ["START_MSEC", "FIRST_PACKET_DELTA", "CONNECT_DELTA", "PAGE_SEQ", "OBJECT_TEXT"]]
#where PAGE_SEQ should all be "1" for the first array and "2 for the second
def splitTransactions(inputarray, maxseq):
    
    miniarray = []

    #and split the current array in n arrays where n is the number of transactions
    i = 0
    while i < (len(inputarray[-3]) - 1):
        
        #create an array for each transaction
        if miniarray == []:
            for j in range(maxseq):
                miniarray.append([])
                for l in range(len(inputarray)):
                    miniarray[j].append([])
                
        #move each item in the transaction to the appropriate new array
        for k in range(len(inputarray)):
            miniarray[int(inputarray[-3][i]) - 1][k].append(inputarray[k][i]) 
        i+= 1
        
                
    #make a new output file for each transaction, write the chart to a new file for each
    return miniarray

#concatenates domain and object strings. Then slices it to fit in the waterfall better
def reducetext(inputarrayA, inputarrayB):
    i = 0
    while i < (len(inputarrayA) - 1):
        if(type(inputarrayA[i]) == str and type(inputarrayB[i]) == str):
            inputarrayA[i] = (inputarrayB[i] + inputarrayA[i])[0:40]
        i+=1
        
    return inputarrayA

#writes .js files for highcharts
def createoutputs(inputarray, maxseq, linearray):
    
    #makes a folder to put the files in
    if not os.path.exists(sys.argv[0] + "/../Data"):
        os.makedirs(sys.argv[0] + "/../Data")
    
    myout = sys.stdout
    outnames = []   #the names of the files
    endtimes = []   
    starttimes = []
    origintimes = []
    
    #for each transaction
    for num in range(maxseq):
        #make a new file
        name = './Data/outputs'+str(num)+'.js'
        outnames.append(name)
        
        #get the time each sequence starts and ends
        starttimes.append(int(inputarray[num][0][0]))
        origintimes.append(int(inputarray[num][0][0]))
        
        endtime = 0
        
        n = 0
        # -1 b/c we deleted our set of domains - CONN_STRING_TEXT in reducetext(), 
        #-1 b/c we dont want to use the second - OBJECT_TEXT. 
        while (n < len(elements)-2):
            endtime += int(inputarray[num][n][-1])
            n += 1
            
        endtimes.append(int(endtime))
        
        #it's cumulative
        if num!= 0:
            starttimes[num] += endtimes[num-1]
            endtimes[num] += endtimes[num-1]
        
        #add starttime to msec
        i = 0
        while i < len(inputarray[num][0])-1:
            inputarray[num][0][i] = int(inputarray[num][0][i])
            inputarray[num][0][i] += starttimes[num]
            i+=1
        
    for num in range(maxseq):
        
        
        f = open(sys.argv[0] + "/../" + outnames[num][1:], 'w')    
        #print to write to file. use myout.write() to write to console in this mode
        sys.stdout = f
        #create a waterfall from the data
        print("\
        //ml is the margin line boundary (for text left of the waterfall)\n\
        var ml = 275; \
        var myline"+inputarray[num][-3][-1]+"; var calculatedPercent = 0;\n\
            $(function main() {\n\
            //different containers are shown/hid to display the different waterfalls\n\
            $(\'#container"+inputarray[num][-3][-1]+"\').highcharts({\n\
                chart: {marginLeft: ml,\n\
                    type: \'bar\',\n\
                    renderTo: \'container"+inputarray[num][-3][-1]+"\'\n\
                },\n\
                legend: {\n\
                    enabled: false\n\
                },\n\
                tooltip: {\
                    enabled: false\
                },\
                title: {\n\
                    text: \'Waterfall\'\
                },\n\
                //the axis labels. \n\
                 xAxis: {categories:"
                 ,inputarray[num][-1],",\
                 alternateGridColor: '#FDFFD5'\
                 },\n\
                         yAxis: [{\n\
                         labels:{ format: \"{value:.3f}\", formatter: function(){return ((this.value) / 1000) + 's';}}, \n\
                    //the starttime\n\
                    min: \"" , starttimes[num] , "\",\n\
                    title: false,\n\
                },{\
                linkedTo:0,\
                labels:{ format: \"{value:.3f}\", formatter: function(){return ((this.value) / 1000) + 's';}}, \n\
                title: false,\n\
                //opposite lets us render the bars horizontally\n\
                opposite:true\
                }],\
                legend: {\
                    backgroundColor: \'#FFFFFF\',\
                    reversed: true\
                },\n\
                plotOptions: {\
                    series: {\
                        stacking: \'normal\'\
                    }\
                },\n\
                 series: [")
        
        i = len(inputarray[num]) - 2
        while (i >= 0):
            
            #loop through the colors for each data set
            print("{")
            if (i < len(colors)):
                print ("color: " + colors[i] + ",")
                      
            print("\n\
            showInLegend: false, data: "
            + (str(inputarray[num][i])).replace("'",""))
            
            if (i == 0):
                print( ",yaxis: 1")
                print("}\
                            ]\
            });\
        });\
        ")
                
            else:
                print("},")
            i-=1
        
        # creates the line and links it to the scrollbar, refreshing every 1000 milliseconds
        print("$(setInterval(\n\
        function makeline(chart) {\n\
        var current = "+inputarray[num][-3][-1]+";\
        var starttime = " , starttimes[num] , ";\n\
        var endtime = " , endtimes[num] , ";\n\
        if(myline"+inputarray[num][-3][-1]+" !== undefined){\n\
        $(myline"+inputarray[num][-3][-1]+".element).remove();};\n\
        var chart = $('#container"+inputarray[num][-3][-1]+"').highcharts();\n\
        var element = document.getElementById('media');\n\
        style = window.getComputedStyle(element);\n\
        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));\n\
        var myheight = $(chart.container).height();\n\
        var startPercent = (starttime / ", endtimes[-1] , ");\n\
        var endPercent = (endtime / ", endtimes[-1] , ");\n\
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);\n\
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;")
        
        # draws the first paint and interactive lines
        # since they're different for each waterfall, it is easier to list all of them each time with conditions
        for item in linearray:
            if(item[-4] != 0):
                    print("\
            if ( current == "+str(item[-3]) +"){\n\
            chart.renderer.rect(\
            (((("+str(item[-4])+" + starttime)/endtime)\
              * ($(chart.container).width() - ml)) + ml - 1)\
             , 60, 1, myheight*.9625).attr(\
            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add(); \
            }")
            if(item[-5] != 0):
                    print("\
            if (current == "+str(item[-3]) +"){\n\
            chart.renderer.rect(\
            (((("+str(item[-5])+" + starttime)/endtime) \
             * ($(chart.container).width() - ml)) + ml - 1)\
            , 60, 1, myheight*.9625).attr(\
            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();\
            }\
            ")
        
        #render the line attached to the image scrollbar.
        #The second line at 0 > calculatedPercent keeps the line visible at the starting position
        print("if ((0 <= calculatedPercent) && (calculatedPercent <=1)){\n\
        myline"+inputarray[num][-3][-1]+" = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(\n\
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}\
        if(0 > calculatedPercent){ myline"+inputarray[num][-3][-1]+" = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(\n\
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));")
        f.close()

    #add useful data to a key file
    f = open(sys.argv[0] + '/../Data/key.js', 'w')
    sys.stdout = f
    print("var outnames =" + str(outnames) + ";")
    print("var starttimes =" + str(starttimes) + ";")
    print("var endtimes =" + str(endtimes) + ";")
    print("var origintimes =" + str(origintimes) + ";")
    f.close()



#image manipulation section
#---------------------------------------------------------------------


#comparison function to sort images
def cmp(a, b):
    explodeda = a.split("/")
    explodedb = b.split("/")
    newa = explodeda[-1][0:-4]
    newb = explodedb[-1][0: -4]
    if (newa == newb):
        return 0
    return (-1 if ((newa) < (newb)) else 1)
    
    
    #get the total load time
def imagesGetMax(images):
    exploded = images[-1].split("\\")
    msecMax = ast.literal_eval(exploded[-1][0:-4])
    if (msecMax > 0):
        return msecMax
    else:
        return 1

#Picks images to display incrementally
def reduceImages(increment, images, msecMax):
    #create a dictionary of (percent complete , image)
    newimages = {}
    percentages = []
    for image in images:
        exploded = image.split("\\")
        imagename = ast.literal_eval(exploded[-1][0:-4]);
        percentages.append((100 * (imagename)/msecMax))
        newimages[(100 * (imagename)/msecMax)] = image
    #my new dict
    n = []
    #my target percentages
    a = range(0, 100 + increment, increment)
    #for each target percentage
    for inc in a:
        temp = percentages[0]
        #find the closest image percentage
        for p in percentages:
            if ((p <= inc) and (p > temp)):
                temp = p;
            
        #dump that in my new array
        n.append((inc, newimages[temp]))
    return n
    

#Manipulates images and ouputs a .js file to write the images to html
def processImages():
    
    increment = 10
    
     #get the list of all files with .jpg extension in the directory and save it in an array named $images
    dir = sys.argv[0] + '/../Screencaps/[0-9]*.jpg'
    images = glob.glob(dir)

    #sort the images by time. The string manipulation is necessary to get the title of the file
    images.sort(key = lambda x: x.split("/")[-1][0:-4]) 
    
        #get the total load time
    msecMax = imagesGetMax(images);
    
    #create keyvalue pairs of [percent complete => %image]
    #for each target percentage, find the closest image percentage and put that in the array
    #[(percentage, image path)]
    reducedimages = reduceImages(increment, images, msecMax)
    reducedimages.sort(key=lambda x: x[1])
    

    if not os.path.exists(sys.argv[0] + "/../Data"):
        os.makedirs(sys.argv[0] + "/../Data")
    
    f = open(sys.argv[0] + '/../Data/images.js', 'w')
    sys.stdout = f
    
        
    #output my images to the html
    for image in reducedimages:
        exploded = image[1].split("\\")
        imagename = exploded[-1][0:-4]
        print("document.write(\"<div class=\\\"image\\\">\
        <p>" + imagename + "s</p>\
        <img src=" + "Screencaps/" + image[1].split("\\")[-1] + \
        " height=\\\"300em\\\" style=\\\"max-width: 500em;\\\">\
        <p>" + str(image[0]) + "%</p>\
        </div>\");")
    
    f.close()
    

# Running the program

processImages()

#is there a Transdata.dat file? If not, grab another .dat file
if not os.path.exists(sys.argv[0] + "/../TransData.dat"):
    dat = glob.glob(sys.argv[0] + "/../*.dat")
    if (len(dat)!= 0):
        data = main(dat[-1])
    
    else: 
        print("no .dat file")
        sys.exit()
else: 
    data = main(sys.argv[0] + "/../TransData.dat")

#'translate the .dat file'
array = formatdata(data, elements)
linearray = array[1] #contains the first paint and interactive information which are rendered as lines
dataarray = array[0] #contains the rest
maxseq = getmax(dataarray) # gets the max load time
dataarray[-1] = reducetext(dataarray[-1], dataarray[-6]) #concatenates domain and object text
del dataarray[-6] #deletes object text. TODO: add to reducetext
output = splitTransactions(dataarray, maxseq) #split into lists of lists for .js outputs
createoutputs(output, maxseq, linearray) #produces .js files
#opens the html file
#webbrowser.get('windows-default').open(sys.argv[0] + '/../waterfall.html')