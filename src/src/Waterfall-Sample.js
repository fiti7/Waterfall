
//determines how much space is allowed for the y-axis labels
var ml = 275;         

//this is the red line marker that marks what point on the waterfall is connected to the image scrollbar position
var myline1; 

//initialized percentage scrolled
var calculatedPercent = 0;            


//create the chart
$(function main() {            
    //container1 is the waterfall container. 
    $('#container1').highcharts({                
        
        //chart contains basic chart information
        chart: {
            
            //determines how much space is allowed for the y-axis labels
            marginLeft: ml,                    
            
            //the waterall is a type of bar chart
            type: 'bar',                    
            
            //container1 is the waterfall container
            renderTo: 'container1'                },                
        
        
        //we're not currently using a legend
        legend: {enabled: false/},
        
        //turns off mouseover highlighting
        tooltip: { enabled: false },
        
        //title of the chart
        title: {text: 'Waterfall'},                 
                 
        // the y axis labels. We plug it in as the x-axis but reverse it later so the bars move left to right
        xAxis: {categories: ['http:wwwwalmartcomcpElectronics3944', 'http:i2walmartimagescomcssbootstrapmincs', 'http:p13nassetswalmartcomstylesirs1131cs', 'http:iwalmartimagescomiifhmpfusionWM_TAB', 'http:i2walmartimagescomcsswmCommoncss', 'http:i2walmartimagescomcsswmRollup_Basej', 'http:i2walmartimagescomcsswmRollup_Other', 'http:i2walmartimagescomiheader_widewalma', 'http:i2walmartimagescomispacergif', 'http:p13nassetswalmartcomscriptsIRSRequi', 'http:p13nassetswalmartcomscriptsbootstra', 'http:i2walmartimagescomjsrollupsrumjsp', 'http:i2walmartimagescomibuttonsICN_close', 'http:i2walmartimagescomjsrollupsfoundati', 'http:i2walmartimagescomjsrollupscatalogj', 'http:i2walmartimagescomispritemainskinic', 'http:i2walmartimagescomispritemainskinbt', 'http:i2walmartimagescomispritemainskinhd', 'http:i2walmartimagescomjsbootstrapminjs', 'http:i2walmartimagescomjsajaxVerBreadcru', 'http:i2walmartimagescomispritemainskinbk', 'http:wwwwalmartcomcatalogbrowsepathhandl', 'http:iwalmartimagescomiifhmpfusion268043', 'http:iwalmartimagescomiifhmpfusionswipem', 'http:iwalmartimagescomiifhmpfusion277854', 'http:iwalmartimagescomiifhmpfusion278014', 'http:iwalmartimagescomiifhmpfusion277714', 'http:iwalmartimagescomiifhmpfusionElectr', 'http:iwalmartimagescomiifhmpfusion120803', 'http:iwalmartimagescomiifhmpfusion278574', 'http:iwalmartimagescomiifhmpfusion27810_', 'http:iwalmartimagescomiifhmpfusionelectr', 'http:iwalmartimagescomiifhmpfusionarrowB', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:i2walmartimagescomicorners2pixel_li', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:i4walmartimagescomimgcommoncommonSp', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:wwwwalmartcomcmidasloaderjs', 'http:i2walmartimagescomifooterHDR_email_', 'http:i2walmartimagescomifootercreditcard', 'http:i2walmartimagescomiopinionlabsm_000', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:iwalmartimagescomiifhmpfusion270224', 'http:iwalmartimagescomiifhmpfusionlg_log', 'http:iwalmartimagescomiifhmpfusionsamsun', 'http:iwalmartimagescomiifhmpfusionElectr', 'http:iwalmartimagescomiifhmpfusion558VIZ', 'http:iwalmartimagescomiifhmpfusionApplel', 'http:iwalmartimagescomiifhmpfusionIntel_', 'http:iwalmartimagescomiifhmpfusion1256jp', 'http:iwalmartimagescomiifhmpfusion12080_', 'http:iwalmartimagescomiifhmpfusion1282jp', 'http:iwalmartimagescomiifhmpfusion1278jp', 'http:iwalmartimagescomiifhmpfusionPanaso', 'http:iwalmartimagescomiifhmpfusionDell_l', 'http:iwalmartimagescomiifhmpfusionOMP_ad', 'http:iwalmartimagescomiifhmpfusionToshib', 'http:flsdoubleclicknetactivityisrc', 'http:iwalmartimagescomiifhmpfusion6972_B', 'http:iwalmartimagescomiifhmpfusionBTC_Op', 'http:wwwgooglecomadsensesearchadsjs', 'http:wwwwalmartcomcmidashljs', 'http:wwwwalmartcomcmidasm_cpjs', 'http:flsdoubleclicknetactivityisrc', 'http:p13nassetswalmartcomscriptswwwwalma', 'http:1559799flsdoubleclicknetactivityisr', 'http:wwwgooglecomadssearchmoduleads309a4', 'http:i2walmartimagescomwebanalyticswmSta', 'http:ctschannelintelligencecom841291_lan', 'http:i2walmartimagescomjsnewSiterollupso', 'http:i2walmartimagescomcssquicklook_btnc', 'http:i2walmartimagescomcssrichmediacss', 'http:i2walmartimagescomifooterfb_30x39pn', 'http:i2walmartimagescomifootermobile_18x', 'http:omniturewalmartcombsswalmartcomwalm', 'http:wwwgoogletagservicescomtagjsgptjs', 'http:omniturewalmartcombsswalmartcomwalm', 'http:partnergoogleadservicescomgptpubads', 'http:beaconwalmartcombeacongifv', 'http:wwwwalmartcomcatalogthirdPartySwitc', 'http:atriggitcomwredir', 'http:cmgdoubleclicknetpixelgoogle_nid', 'http:atriggitcompxgcmid', 'http:wwwfacebookcomfruphpp', 'http:i2walmartimagescomjsjqueryuithemewa', 'http:i2walmartimagescomjsjqueryuithemewa', 'http:atriggitcompxfbcms', 'http:beaconwalmartcomtapgiftap', 'http:prfihubcomcmin', 'http:beaconwalmartcomtapgiftap', 'http:discriteocomdiswalmartaspxredir', 'http:cmgdoubleclicknetpixelgoogle_nid'] ,                 alternateGridColor: '#FDFFD5'                 },
                 
    //signifies formatting the x-axis labels and data.
    yAxis: [
    
    //labels should be Seconds.Milliseconds s form
    {labels:{ format: 
    
    //puts a decimal in the right place
    "{value:.3f}",       
    //converts seconds format from milliseconds and adds an s to the label
    formatter: function(){return ((this.value) / 1000) + 's';}},
             
    //what is the minimum value for the chart?
    min: " 41 ",                    
    
    //no x-axis title
    title: false,},
    
    //2nd x axis linked to the first allows labels on the top and bottom of the chart
    {linkedTo:0,                
    
    //labels should be Seconds.Milliseconds s form
    {labels:{ format: 
    
    //puts a decimal in the right place
    "{value:.3f}",       
    //converts seconds format from milliseconds and adds an s to the label
    formatter: function(){return ((this.value) / 1000) + 's';}},
        
    //no title for bottom axis
     title: false,                
    
    //2nd x-axis is on the bottom
    opposite:true                }],
                 
    //reversed flips x and y axis !
    legend: {   backgroundColor: '#FFFFFF',  reversed: true  },               
    
    //bars stack on top of each other
    plotOptions: {  series: {stacking: 'normal' }},                
                 
    //the data             
                 
//item number 
                 series: [
{
            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 69, 63, 64, 65, 66, 67, 69, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 84, 78, 79, 80, 85, 81, 86, 87, 88, 89, 82, 83, 90, 91, 92, 93, 94, 95]
},

//transaction number
{
            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
//unused
{
            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
                     
// the elements used
{
color: 'darkblue',
            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
},
{
color: 'blue',
            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'lightblue',
            showInLegend: false, data: [30, 7, 6, 7, 7, 7, 10, 7, 7, 6, 6, 5, 5, 5, 6, 7, 6, 6, 5, 5, 4, 199, 3, 3, 100, 6, 10, 3, 3, 3, 3, 5, 3, 3, 3, 11, 5, 6, 6, 6, 4, 7, 6, 6, 4, 5, 4, 126, 6, 5, 5, 5, 4, 4, 10, 9, 9, 8, 8, 8, 5, 5, 12, 3, 5, 12, 7, 5, 12, 7, 14, 16, 4, 7, 4, 3, 3, 3, 3, 24, 3, 26, 3, 23, 140, 24, 11, 22, 98, 3, 3, 21, 24, 21, 23, 24, 13]
},
{
color: 'forestgreen',
            showInLegend: false, data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'limegreen',
            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',
            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',
            showInLegend: false, data: [3, 3, 5, 3, 4, 3, 3, 4, 4, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 12, 0, 6, 0, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0, 22, 9, 0, 3, 23, 0, 22, 4, 0, 2, 0, 0, 0, 0, 22, 0, 25, 0]
},
{
color: 'yellow',
            showInLegend: false, data: [18, 13, 15, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 8, 0, 0, 0, 0, 10, 0, 0, 10, 0, 0, 0, 0, 0, 30, 7, 0, 10, 11, 0, 9, 5, 0, 9, 0, 0, 0, 0, 9, 0, 4, 0]
},
{
color: 'transparent',
            showInLegend: false, data: [82, 143, 143, 145, 156, 156, 156, 156, 156, 158, 158, 167, 213, 213, 214, 229, 230, 230, 464, 464, 500, 505, 506, 506, 506, 507, 507, 507, 509, 513, 520, 520, 524, 524, 525, 542, 542, 543, 543, 543, 546, 547, 547, 547, 550, 550, 550, 553, 556, 557, 557, 562, 563, 563, 567, 568, 568, 578, 578, 578, 587, 587, 592, 595, 595, 599, 599, 600, 620, 624, 634, 634, 713, 713, 714, 714, 714, 723, 723, 753, 756, 830, 832, 1169, 1171, 1227, 1283, 1303, 1327, 1409, 1409, 1437, 1459, 1485, 1540, 1565, 1578]
    
,
//which y axis is it connected to?
    yaxis: 1
}                            ]            });        });        
    
//part 2-- the line markers
    
//reset every second
$(setInterval(        
    function makeline(chart) {        
    //the transaction number -- used to render load and paint for each transaction
    var current = 1; 
    //what is our start and endtime?
    var starttime =  41 ;        
    var endtime =  1687 ;        
    
    //remove any existing line
    if(myline1 !== undefined){        $(myline1.element).remove();};        
    
    //get the chart object
    var chart = $('#container1').highcharts();        
    
    //this section figures out the position of the red line marker connected to the filmstrip scroll position
    
    //gets the filmstrip object
    var element = document.getElementById('media');     
    style = window.getComputedStyle(element);     
    //figures out the percentage scrolled
    var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));           //get the chart containers height
    var myheight = $(chart.container).height(); 
    //the percentage compared to last waterfall's max time
    var startPercent = (starttime /  13130 );       
    var endPercent = (endtime /  13130 );     
    //the percentage scrolled of the current waterfall
    calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);   
    // and the actual location on the current waterfall
    var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
    
//this section plots the bars showing the first paint and intercative lines

//only shows it in the right waterfall
    if ( current == 1){   
//draws a rectangle on the chart
    chart.renderer.rect(   
        //the time of the event has to be refactored to relate of the chart's width and height
        ((((113 + starttime)/endtime)* ($(chart.container).width() - ml)) + ml - 1) , 60, 1, myheight*.9625).attr(
        //how wide?
        {'stroke-width': 1,
         
         //what color?
         stroke: 'salmon',
         
         //what elements does it appear in front of or behind?
         zIndex: 4}).add();}
        
        
            if (current == 1){            chart.renderer.rect(            ((((452 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 2){            chart.renderer.rect(            ((((75 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){            chart.renderer.rect(            ((((367 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 3){            chart.renderer.rect(            ((((157 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 3){            chart.renderer.rect(            ((((448 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 4){            chart.renderer.rect(            ((((127 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 4){            chart.renderer.rect(            ((((369 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 7){            chart.renderer.rect(            ((((1075 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 7){            chart.renderer.rect(            ((((1361 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){        myline1 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline1 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
