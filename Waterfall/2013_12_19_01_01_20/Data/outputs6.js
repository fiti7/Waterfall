        //ml is the margin line boundary (for text left of the waterfall)
        var ml = 275;         var myline7; var calculatedPercent = 0;
            $(function main() {
            //different containers are shown/hid to display the different waterfalls
            $('#container7').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container7'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                //the axis labels. 
                 xAxis: {categories: ['http://www.walmart.com/catalog/product.d', 'http://www.walmart.com/catalog/product.d', 'http://omniture.walmart.com/b/ss/walmart', 'http://www.walmart.com/ip/Hot-Holiday-La', 'http://www.walmart.com/ip/Hot-Holiday-La', 'http://i2.walmartimages.com/css/wmRollup', 'http://i2.walmartimages.com/css/print_it', 'http://i2.walmartimages.com/i/catalog/mo', 'http://www.walmart.com/ip/Hot-Holiday-La', 'http://i2.walmartimages.com/css/itempage', 'http://i2.walmartimages.com/i/corners/l_', 'http://i2.walmartimages.com/i/if/cat/icn', 'http://i2.walmartimages.com/i/corners/l_', 'http://i2.walmartimages.com/i/corners/r_', 'http://i2.walmartimages.com/i/corners/r_', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/p/00/88/62/', 'http://i.walmartimages.com/i/p/00/88/77/', 'http://i.walmartimages.com/i/p/00/88/77/', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i2.walmartimages.com/i/pcache/rat', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i2.walmartimages.com/i/marketplac', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i.walmartimages.com/i/p/00/01/24/', 'http://i.walmartimages.com/i/p/00/01/24/', 'http://i.walmartimages.com/i/p/00/01/24/', 'http://i.walmartimages.com/i/p/00/66/29/', 'http://i.walmartimages.com/i/p/00/66/29/', 'http://i.walmartimages.com/i/p/00/66/29/', 'http://i.walmartimages.com/i/p/00/01/38/', 'http://i.walmartimages.com/i/p/00/01/38/', 'http://i.walmartimages.com/i/p/00/88/77/', 'http://i.walmartimages.com/i/p/00/80/09/', 'http://i.walmartimages.com/i/p/00/75/14/', 'http://i.walmartimages.com/i/p/00/75/14/', 'http://i.walmartimages.com/i/p/00/75/14/', 'http://i.walmartimages.com/i/p/00/09/78/', 'http://i.walmartimages.com/i/p/00/09/78/', 'http://i.walmartimages.com/i/p/00/88/53/', 'http://i.walmartimages.com/i/p/00/88/53/', 'http://i.walmartimages.com/i/p/00/79/93/', 'http://i.walmartimages.com/i/p/00/88/53/', 'http://i.walmartimages.com/i/p/00/88/53/', 'http://i.walmartimages.com/i/p/00/84/59/', 'http://i.walmartimages.com/i/p/00/60/64/', 'http://i.walmartimages.com/i/p/00/71/09/', 'http://i.walmartimages.com/i/p/00/05/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/72/28/', 'http://i.walmartimages.com/i/p/00/73/70/', 'http://i.walmartimages.com/i/p/00/73/70/', 'http://i.walmartimages.com/i/p/00/73/70/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/68/11/', 'http://i.walmartimages.com/i/p/00/82/73/', 'http://i.walmartimages.com/i/p/00/82/73/', 'http://i.walmartimages.com/i/p/00/82/73/', 'http://www.walmart.com/i/style/def/btn/B', 'http://i.walmartimages.com/i/p/11/13/01/', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i.walmartimages.com/i/p/00/88/77/', 'http://i.walmartimages.com/i/p/00/88/62/', 'http://i.walmartimages.com/i/p/00/88/41/', 'http://i.walmartimages.com/i/p/00/88/65/', 'http://www.walmart.com/c/midas/m_ip.js', 'http://www.walmart.com/co/updating.html', 'http://www.google.com/uds/afs?q', 'http://www.google.com/uds/afs?q', 'http://www.walmart.com/js/jquery/ui/them', 'http://www.walmart.com/catalog/thirdPart', 'http://beacon.walmart.com/beacon.gif?v', 'http://beacon.walmart.com/beacon.gif?u', 'http://beacon.walmart.com/beacon.gif?u', 'http://beacon.walmart.com/beacon.gif?u', 'http://log.pinterest.com/?via'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    //the starttime
                    min: " 14054 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                //opposite lets us render the bars horizontally
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84]
},
{

            showInLegend: false, data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 22, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [14059, 14083, 14196, 14240, 14252, 15381, 15381, 15383, 15727, 16233, 16233, 16233, 16233, 16289, 16289, 16298, 16305, 16306, 16306, 16334, 16336, 16362, 16362, 16362, 16362, 16400, 16400, 16413, 16438, 16438, 16439, 16445, 16445, 16446, 16492, 16492, 16492, 16502, 16518, 16518, 16539, 16539, 16539, 16540, 16557, 16557, 16557, 16558, 16605, 16612, 16612, 16612, 16612, 16612, 16612, 16618, 16645, 16646, 16646, 16646, 16646, 16646, 16655, 16656, 16691, 16691, 16691, 16720, 16727, 16734, 16852, 16852, 16852, 16852, 16853, 16980, 17771, 17942, 17944, 18081, 18263, 18264, 18462, 18463, 18464, 5225]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        var current = 7;        var starttime =  14054 ;
        var endtime =  19365 ;
        if(myline7 !== undefined){
        $(myline7.element).remove();};
        var chart = $('#container7').highcharts();
        var element = document.getElementById('media');
        style = window.getComputedStyle(element);
        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));
        var myheight = $(chart.container).height();
        var startPercent = (starttime /  19365 );
        var endPercent = (endtime /  19365 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
            if ( current == 1){
            chart.renderer.rect(            ((((98 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if ( current == 2){
            chart.renderer.rect(            ((((281 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){
            chart.renderer.rect(            ((((349 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 3){
            chart.renderer.rect(            ((((417 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 3){
            chart.renderer.rect(            ((((491 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 4){
            chart.renderer.rect(            ((((842 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 4){
            chart.renderer.rect(            ((((1088 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 7){
            chart.renderer.rect(            ((((1948 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 7){
            chart.renderer.rect(            ((((2296 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline7 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline7 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
