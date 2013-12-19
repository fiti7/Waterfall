        //ml is the margin line boundary (for text left of the waterfall)
        var ml = 275;         var myline6; var calculatedPercent = 0;
            $(function main() {
            //different containers are shown/hid to display the different waterfalls
            $('#container6').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container6'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                //the axis labels. 
                 xAxis: {categories: ['http://www.walmart.com/i/quicklook/PrevB', 'http://www.walmart.com/i/quicklook/NextB', 'http://www.walmart.com/catalog/quicklook', 'http://i.walmartimages.com/i/p/11/13/00/', 'http://i2.walmartimages.com/i/quicklook/', 'http://i2.walmartimages.com/i/quicklook/', 'http://i2.walmartimages.com/i/quicklook/', 'http://i2.walmartimages.com/i/quicklook/', 'http://i2.walmartimages.com/css/overlay.', 'http://i2.walmartimages.com/js/flyout/ma', 'http://i.walmartimages.com/i/p/11/13/00/', 'http://assets.pinterest.com/images/PinEx', 'http://i2.walmartimages.com/css/quickloo', 'http://content-cdn.walmart.com/domain.ht', 'http://i2.walmartimages.com/i/ui/quicklo', 'http://i2.walmartimages.com/i/ui/quicklo', 'http://i2.walmartimages.com/i/ui/quicklo', 'http://i2.walmartimages.com/i/errors/BKG', 'http://i2.walmartimages.com/i/errors/BKG', 'http://i.walmartimages.com/i/p/11/13/00/', 'http://beacon.walmart.com/beacon.gif?v', 'http://assets.pinterest.com/js/pinit.js', 'http://log.pinterest.com/?via'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    //the starttime
                    min: " 11929 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                //opposite lets us render the bars horizontally
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
},
{

            showInLegend: false, data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 95]
},
{
color: 'yellow',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 92, 0, 0, 0, 0, 0, 0, 0, 0, 19]
},
{
color: 'transparent',

            showInLegend: false, data: [11933, 11935, 11954, 12041, 12126, 12126, 12126, 12126, 12329, 12329, 12329, 12329, 12338, 12628, 12696, 12706, 12711, 12736, 12737, 12763, 12856, 12858, 1981]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        var current = 6;        var starttime =  11929 ;
        var endtime =  14049 ;
        if(myline6 !== undefined){
        $(myline6.element).remove();};
        var chart = $('#container6').highcharts();
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
        myline6 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline6 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
