#TODO: put in order. 
#Initial Connection: 115 ms
#Time to First Byte: 221 ms
#Content Download: 115 ms


import pprint
import sys
import operator
import webbrowser

elements = ["START_MSEC", "DNS_LOOKUP_MSEC", "CONNECT_DELTA", "SSL_HANDSHAKE_DELTA",
             "REDIR_DELTA", "REQUEST_DELTA", 
             "FIRST_BYTE_MSEC", 
             #"CONTENT_BYTE",
             "MS_FIRST_PAINT_MSEC", "DOM_INTERACTIVE_MSEC", 
             "PAGE_SEQ", "RECORD_SEQ", "OBJECT_TEXT"]
#elements = ["START_MSEC", "FIRST_PACKET_DELTA", "CONNECT_DELTA", "PAGE_SEQ", "RECORD_SEQ", "OBJECT_TEXT"]
# elements = ["START_MSEC", "DNS_LOOKUP_MSEC", "CONNECT_DELTA", "SSL_HANDSHAKE_DELTA",
#                          "REDIR_DELTA", "REQUEST_DELTA", "FIRST_BYTE_MSEC", "CONTENT_BYTE",
#             "FIRST_PACKET_DELTA", "CONNECT_DELTA","PAGE_SEQ", "RECORD_SEQ", "OBJECT_TEXT"]

colors = ["\'transparent\'", "\'yellow\'", "\'orange\'", "\'pink\'", "\'light green\'", "\'dark green\'", 
          "\'light blue\'"]#, "\'dark blue\'"]

#colors = ["light blue", "dark green", "light green", "pink", "orange", "yellow", "transparent"]

# START_MSEC - white
# DNS_LOOKUP_MSEC - yellow
# CONNECT_DELTA - orange
# SSL_HANDSHAKE_DELTA - pink
# REDIR_DELTA - light green
# REQUEST_DELTA - Dark Green
# FIRST_BYTE_MSEC - light blue
# CONTENT_BYTE - dark blue ???
# client time ???
# MS_FIRST_PAINT_MSEC - greenline
# DOM_INTERACTIVE_MSEC - redline

#                 DNS Lookup - yellow
#                 Init Connection - orange
#                 SSl - pink
#                 Redirection - light green
#                 Request time - Dark green
#                 First Byte Download - light blue
#                 Content Download - Blue
#                 Client Time - Dark Blue
#                 Time to first paint - lime green line
#                 Time to interactive page - red line
#first packet + connect , fpc - c / fpc

def main(source):
    lines = []
    with open(source, "r") as f:
        try:
            items = f.readlines()
            #print(items)
            for item in items:
                i = 0
                j = ""
                while (i < len(item)):
                    if item[i] == "=":
                        if item[i-3] == ' ':
                            j = item[i-2:i]
                            j = finditem(j)
                            if j!= None:
                                item = item[0:i-2] + j + item[i:-1]
                        else:  
                            j = item[i-3:i]
                            j = finditem(j)
                            if j!= None:
                                item = item[0:i-3] + j + item[i:-1]
                    i+=1
                lines.append(item)                  
                

            pass
        except:
            pass
        finally:
            return lines
     
def finditem(input):
    with open("./map.txt", "r") as f:
        try:
            items = f.readlines()
        
            j = 0
            while j < len(items):
                item = items[j]

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

def formatdata(data, elements):
    myarray = []
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

    newarray = []
    for element in elements:
        newarray.append([])
        
    for item in myarray:
        i=0
        while (i < len(newarray)):
            newarray[i].append(item[i])
            i+=1
    return (newarray, linearray)

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

#for easier display
def reducetext(inputarray):
    i = 0
    while i < (len(inputarray) - 1):
        if(type(inputarray[i]) == str):
            inputarray[i] = inputarray[i][0:15]
        i+=1
        
    return inputarray

#write to .js files for later use. 
def createoutputs(inputarray, maxseq, linearray):
    myout = sys.stdout
    outnames = []   #the names of the files
    endtimes = []   
    starttimes = []
    origintimes = []
    
    #for each transaction
    for num in range(maxseq):
        #make a new file
        name = './Data/outputs' + str(num) + '.js'
        outnames.append(name)
        
        #get the time each sequence starts and ends
        starttimes.append(int(inputarray[num][0][0]))
        origintimes.append(int(inputarray[num][0][0]))
        
        endtime = 0
        
        n = 0
        while (n < len(elements)-1):
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
        
        #myout.write(str(num))
        
        f = open("C:/Users/Etai/Desktop/Dropbox/Waterfall/" + outnames[num][1:], 'w')    
        #print to write to file
        sys.stdout = f
        #create a waterfall from the data
        #ml is going to be my margin line boundary (for text left of the waterfall)
        print("var current = "+inputarray[num][-3][-1]+";\
        var ml = 150; var myline; var calculatedPercent = 0;\n\
        var starttime = " , starttimes[num] , ";\n\
        var endtime = " , endtimes[num] , ";\n\
            $(function main() {\n\
            $(\'#container\').highcharts({\n\
                chart: {marginLeft: ml,\n\
                    type: \'bar\',\n\
                    renderTo: \'container\'\n\
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
                 xAxis: {categories:"
                 ,inputarray[num][-1],",\
                 alternateGridColor: '#FDFFD5'\
                 },\n\
                         yAxis: [{\n\
                         labels:{ format: \"{value:.3f}\", formatter: function(){return ((this.value) / 1000) + 's';}}, \n\
                    min: \"" , starttimes[num] , "\",\n\
                    title: false,\n\
                },{\
                linkedTo:0,\
                labels:{ format: \"{value:.3f}\", formatter: function(){return ((this.value) / 1000) + 's';}}, \n\
                title: false,\n\
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
            
            print("{")
#             if (i == 0):
#                 print ("color: \'transparent\',")
#                 
#                 
            if (i < len(colors)):
                print ("color: " + colors[i] + ",")
                
                
            print("\n\
            showInLegend: false, data: "
            + (str(inputarray[num][i])).replace("'",""))
            
            if (i == 0):
                print( ",yaxis: 1")
                

                    
                #if this category, then this color
#                 DNS Lookup - yellow
#                 Init Connection - orange
#                 SSl - pink
#                 Redirection - light green
#                 Request time - Dark green
#                 First Byte Download - light blue
#                 Content Download - Blue
#                 Client Time - Dark Blue
#                 Time to first paint - lime green line
#                 Time to interactive page - red line
                print("}\
                            ]\
            });\
        });\
        ")
                
#           data: [
#       {y: 34.4, color: 'red'},     // this point is red
#       21.8,                        // default blue
#       {y: 20.1, color: '#aaff99'}, // this will be greenish
#       20]                          // default blue       
                
            else:
                print("},")
            i-=1
        
        # creates the line and links it to the scrollbar, refreshing every 1000 milliseconds
        print("$(setInterval(\n\
        function makeline(chart) {\n\
        if(myline !== undefined){\n\
        $(myline.element).remove();};\n\
        var chart = $('#container').highcharts();\n\
        var element = document.getElementById('media');\n\
        style = window.getComputedStyle(element);\n\
        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));\n\
        var myheight = $(chart.container).height();\n\
        var startPercent = (starttime / ", endtimes[-1] , ");\n\
        var endPercent = (endtime / ", endtimes[-1] , ");\n\
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);\n\
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;")
        
        myout.write(inputarray[num][-3][-1])
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
            
        print("if ((0 <= calculatedPercent) && (calculatedPercent <=1)){\n\
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(\n\
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}\
        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(\n\
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));")
        f.close()


        #new scrollpercent working the range from starttime to endtime
        
        #myvars - the percent .media has scrolled
        #all  start and endtimes
        
        #solution - find the start and endtime related to this waterfall
        #derive time using the max endtime * scroll percent
        #new percent should be the range of startime/maxend - endtime/maxend
    f = open('C:/Users/Etai/Desktop/Dropbox/Waterfall/Data/key.js', 'w')
    sys.stdout = f
    print("var outnames =" + str(outnames) + ";")
    print("var starttimes =" + str(starttimes) + ";")
    print("var endtimes =" + str(endtimes) + ";")
    print("var origintimes =" + str(origintimes) + ";")
    f.close()
    
    
    
#find the related picture files and data files. Open the pages
#how are they related?
#figure out how to match- change the names so they match
 
data = main("C:\\Users\\Etai\\Desktop\\TransData.dat")
#print(data)
array = formatdata(data, elements)
linearray = array[1]
dataarray = array[0]
#print(newarray)
maxseq = getmax(dataarray)
#print(maxseq)
reducetext(array[0][-1])
output = splitTransactions(dataarray, maxseq)
#print(output) 
createoutputs(output, maxseq, linearray)
webbrowser.get('windows-default').open('http://localhost/Waterfall/linedbase3.php?link=./ScreenCaps/*.jpg')

#print(main("C:\\Users\\Etai\\Desktop\\TransData.dat"))
