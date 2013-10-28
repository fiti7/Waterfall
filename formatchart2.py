
#Initial Connection: 115 ms
#Time to First Byte: 221 ms
#Content Download: 115 ms

import ExtractData
import pprint

import sys

elements = ["START_MSEC", "FIRST_PACKET_DELTA", "CONNECT_DELTA", "PAGE_SEQ", "OBJECT_TEXT"]

data = ExtractData.main()

#first packet + connect , fpc - c / fpc


myarray = []
#we want this in the form [[start, middle, end, label]...]

#if it is a viable item (has an object text? )
#pull out start time, connect delta, first packet

#start with an array of entries
for datum in data:
   # print(datum)
    newarray = [0] * len(elements)
    #now each element is its own array in that array
    datum = datum.split(" ")
    #print(datum)
    #now we have a tuple in each of those array of element : value 
    #example - [[[Header_byte,"510"],[element_delta,"3042]...]...]
    for item in datum:
        item = item.split("=")
        #print(item)
        n=0
        #now check and see if it matches
        while n < len(elements):
            if item[0] == elements[n]:
                newarray[n] = (item[1].strip("\'").strip("\"")) 
            n+=1
    
    if newarray[3] != 0:
        myarray.append(newarray)

#function to format the chart for RGraph style.
# 
# for item in myarray:
#      temp = int(item[2])
#      item[1] = int(item[1]) + temp
#      if temp != 0:
#          item[2] = 100 * temp/int(item[1])
#      item[0] = int(item[0])
#      

newarray = []
for element in elements:
    newarray.append([])
    
for item in myarray:
    i=0
    while (i < len(newarray)):
        newarray[i].append(item[i])
        i+=1

#print(newarray)
#create an array of the data for each element and each name

def createoutputs(newarray):
    
    #get the number of transactions
    #and split the current array in n arrays where n is the number of transactions
    maxseq = 1
    miniArray = []

    i = 0
    while i < len(newarray[3] - 1):
        if newarray[3][i] > maxseq:
            maxseq = newarray[3][i]
        
        #create an an array for each transaction
        for j in range(maxseq - 1):
            newarray.append([])
        
        #move each item in the transaction to the appropriate new array
        for k in newarray:
            for l in newarray[k]:
                miniArray[newarray[3][i]].append(newarray[k][l])
        
        i+= 1
            
    
    
    #make a new output file for each transaction
    outputs = []
    for num in range(maxseq):
        f = open('.\output' + num + '.js', 'w')
        outputs.append(f)
    #Psuedocode- loop through sequences, get the highest number and make that many output files. 

#Split my array into a further n arrays for my n different sequences- plug and play
    
   
    sys.stdout = f
    print("$(function main() {\
        $(\'#container\').highcharts({\
            chart: {\
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
             + str(newarray[4]) +"\
             },\
                     yAxis: {\
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
    
    i = len(newarray) - 2
    while (i >= 0):
        
        print("{")
        if (i == 0):
            print ("color: \'transparent\',")
        print("\
        showInLegend: false, data: "
        + (str(newarray[i])).replace("'","") + "}")
        if (i == 0):
            print( "\
            ]\
        });\
    });\
    ")
        else:
            print(",")
        i-=1
        
    print("var myline;$(setInterval(function makeline(chart) {if(myline !== undefined){$(myline.element).remove();};var chart = $(\'#container\').highcharts();var element = document.getElementById(\'media\');style = window.getComputedStyle(element);var scrollPercent = (.97 * (element.scrollLeft) / (element.scrollWidth));var mywidth = $(chart.container).width(); var myheight =  scrollPercent * $(chart.container).height() ;myline = chart.renderer.rect(myheight, 0, 2, mywidth*1.4).attr({\'stroke-width\': 2,stroke: \'red\',}).add();}, 1000));")
    f.close()
