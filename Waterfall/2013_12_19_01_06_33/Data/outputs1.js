        //ml is the margin line boundary (for text left of the waterfall)
        var ml = 275;         var myline2; var calculatedPercent = 0;
            $(function main() {
            //different containers are shown/hid to display the different waterfalls
            $('#container2').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container2'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                //the axis labels. 
                 xAxis: {categories: ['http://www.walmart.com/cp/3951?povid', 'http://www.walmart.com/cart2/pCartInit.d', 'http://www.walmart.com/catalog/browsepat', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://omniture.walmart.com/b/ss/walmart', 'http://i2.walmartimages.com/i/catalog/mo', 'http://www.walmart.com/catalog/thirdPart', 'http://beacon.walmart.com/beacon.gif?v', 'http://p.rfihub.com/cm?in', 'http://beacon.walmart.com/tap.gif?tap', 'http://a.triggit.com/w?redir', 'http://cm.g.doubleclick.net/pixel?google', 'http://a.triggit.com/pxgcm?id', 'http://www.facebook.com/fr/u.php?p', 'http://a.triggit.com/pxfbcm?s', 'http://beacon.walmart.com/tap.gif?tap', 'http://d.audienceiq.com/r/dd/id/L21rdC80', 'http://beacon.walmart.com/tap.gif?tap'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    //the starttime
                    min: " 1752 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                //opposite lets us render the bars horizontally
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
},
{

            showInLegend: false, data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 20, 0, 0, 6, 0, 0, 21, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 13, 0, 0, 9, 0, 0, 8, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [1755, 2326, 2359, 2360, 2360, 2360, 2361, 2361, 2361, 2367, 2373, 2373, 2377, 2378, 2380, 2381, 2398, 2398, 2399, 2400, 2403, 2414, 2414, 2415, 2418, 2420, 2420, 2420, 2421, 2426, 2426, 2427, 2427, 2600, 3013, 3097, 3113, 3142, 3211, 3237, 3293, 3307, 3332, 3475, 3497, 3524, 1826]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        var current = 2;        var starttime =  1752 ;
        var endtime =  3624 ;
        if(myline2 !== undefined){
        $(myline2.element).remove();};
        var chart = $('#container2').highcharts();
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
        myline2 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline2 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
