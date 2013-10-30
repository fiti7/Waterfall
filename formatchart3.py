#TODO: put in order. 
#Initial Connection: 115 ms
#Time to First Byte: 221 ms
#Content Download: 115 ms

import ExtractData
import pprint
import sys

elements = ["START_MSEC", "FIRST_PACKET_DELTA", "CONNECT_DELTA", "PAGE_SEQ", "RECORD_SEQ", "OBJECT_TEXT"]

#first packet + connect , fpc - c / fpc

def formatdata(data, elements):
    myarray = []
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
        if newarray[-1] != 0 and newarray[3] != 0:
            myarray.append(newarray)
    
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
    return newarray

def getmax(inputarray):
    maxseq = 1

    #get the number of transactions
    i = 0
    while i < (len(inputarray[3]) - 1):
        if int(inputarray[3][i]) > maxseq:
            maxseq = int(inputarray[3][i])
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
    while i < (len(inputarray[3]) - 1):
        
        #create an array for each transaction
        if miniarray == []:
            for j in range(maxseq):
                miniarray.append([])
                for l in range(len(inputarray)):
                    miniarray[j].append([])
                
        #move each item in the transaction to the appropriate new array
        for k in range(len(inputarray)):
            miniarray[int(inputarray[3][i]) - 1][k].append(inputarray[k][i]) 
        i+= 1
        
                
    #make a new output file for each transaction, write the chart to a new file for each
    return miniarray

#for easier display
def reducetext(inputarray):
    i = 0
    while i < (len(inputarray) - 1):
        inputarray[i] = inputarray[i][0:15]
        i+=1
        
    return inputarray

#write to .js files for later use. 
def createoutputs(inputarray, maxseq):
    outnames = []   #the names of the files
    endtimes = []   
    starttimes = []
    
    #for each transaction
    for num in range(maxseq):
        
        #make a new file
        name = './outputs' + str(num) + '.js'
        outnames.append(name)
        
        #get the time each sequence starts and ends
        starttimes.append(int(inputarray[num][0][0]))
        endtimes.append(int(inputarray[num][0][-1]) + int(inputarray[num][1][-1]) + int((inputarray[num][2][-1])))
        #it's cumulative
        if num!= 0:
            starttimes[num] += endtimes[num-1]
            endtimes[num] += endtimes[num-1]
        
        #print to write to file
        f = open(name, 'w')    
        sys.stdout = f
        #create a waterfall from the data
        #ml is going to be my margin line boundary (for text left of the waterfall)
        print("var ml = 150; var myline; var scrollPercent = 0;\
            $(function main() {\
            $(\'#container\').highcharts({\
                chart: {marginLeft: ml,\
                    type: \'bar\',\
                    renderTo: \'container\'\
                },\
                legend: {\
                    enabled: false\
                },\
                tooltip: {\
                    enabled: false\
                },\
                title: {\
                    text: \'Waterfall\'\
                },\
                 xAxis: {categories:"
                 + str(inputarray[num][-1]) +"\
                 },\
                         yAxis: {\
                         labels:{ format: \"{value:.3f}\", formatter: function(){return ((this.value) / 1000) + 's';}}, \
                    min: 0,\
                    title: {\
                        text: \'Waterfall\'\
                    }\
                },\
                legend: {\
                    backgroundColor: \'#FFFFFF\',\
                    reversed: true\
                },\
                plotOptions: {\
                    series: {\
                        stacking: \'normal\'\
                    }\
                },\
                 series: [")
        
        i = len(inputarray[num]) - 2
        while (i >= 0):
            
            print("{")
            if (i == 0):
                print ("color: \'transparent\',")
            print("\
            showInLegend: false, data: "
            + (str(inputarray[num][i])).replace("'","") + "}")
            if (i == 0):
                print( "\
                ]\
            });\
        });\
        ")
            else:
                print(",")
            i-=1
        
        # creates the line and links it to the scrollbar, refreshing every 1000 milliseconds
        print("$(setInterval(\
        function makeline(chart) {\n\
        if(myline !== undefined){\n\
        $(myline.element).remove();};\n\
        var chart = $('#container').highcharts();\n\
        var element = document.getElementById('media');\n\
        style = window.getComputedStyle(element);\n\
        scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));\n\
        var myheight = $(chart.container).height();\n\
        var mywidth =  (scrollPercent * ($(chart.container).width() - ml)) + ml - 1 ;\n\
        myline = chart.renderer.rect(mywidth, 40, 1, myheight *.955).attr(\n\
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();\n\
        }, 1000));")
        f.close()
            #create a file holding the names of the other files   

    f = open('.\key.js', 'w')
    sys.stdout = f
    print("var outnames =" + str(outnames) + ";")
    print("var starttimes =" + str(starttimes) + ";")
    print("var endtimes =" + str(endtimes) + ";")
    f.close()
    

data = ExtractData.main()
newarray = formatdata(data, elements)
maxseq = getmax(newarray)
reducetext(newarray[-1])
output = splitTransactions(newarray, maxseq)
createoutputs(output, maxseq)