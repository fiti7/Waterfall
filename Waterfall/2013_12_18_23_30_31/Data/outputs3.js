        //ml is the margin line boundary (for text left of the waterfall)
        var ml = 275;         var myline4; var calculatedPercent = 0;
            $(function main() {
            //different containers are shown/hid to display the different waterfalls
            $('#container4').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container4'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                //the axis labels. 
                 xAxis: {categories: ['http://www.walmart.com/browse/computers/', 'http://i2.walmartimages.com/css/wmRollup', 'http://i2.walmartimages.com/js/polarisLe', 'http://walmart.ugc.bazaarvoice.com/stati', 'http://www.walmart.com/i/spacer.gif', 'http://i2.walmartimages.com/i/search/img', 'http://i2.walmartimages.com/i/search/img', 'http://i2.walmartimages.com/i/search/img', 'http://i2.walmartimages.com/i/search/img', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i2.walmartimages.com/js/wmui/sear', 'http://i.walmartimages.com/i/p/11/13/00/', 'http://i2.walmartimages.com/i/search/bes', 'http://i2.walmartimages.com/js/wmui/cart', 'http://i2.walmartimages.com/i/fusion/mp/', 'http://www.walmart.com/i/search/bkrnd-ut', 'http://www.walmart.com/i/search/btn-togg', 'http://www.walmart.com/i/search/icn.png', 'http://i2.walmartimages.com/i/catalog/mo', 'http://i2.walmartimages.com/i/catalog/mo', 'http://i.walmartimages.com/i/p/11/13/00/', 'http://i.walmartimages.com/i/p/11/13/04/', 'http://i.walmartimages.com/i/p/11/13/01/', 'http://i2.walmartimages.com/i/buttons/at', 'http://i.walmartimages.com/i/p/11/13/03/', 'http://i2.walmartimages.com/i/fusion/icn', 'http://i.walmartimages.com/i/p/11/13/01/', 'http://i.walmartimages.com/i/p/11/13/01/', 'http://i.walmartimages.com/i/p/11/13/03/', 'http://i.walmartimages.com/i/p/11/13/01/', 'http://i.walmartimages.com/i/p/11/13/04/', 'http://i.walmartimages.com/i/p/11/13/03/', 'http://i.walmartimages.com/i/p/11/13/03/', 'http://i2.walmartimages.com/js/diffshelf', 'http://i.walmartimages.com/i/p/11/13/01/', 'http://i2.walmartimages.com/js/wmui/sear', 'http://i2.walmartimages.com/css/s3020.cs', 'http://www.walmart.com/c/midas/m_default', 'http://www.google.com/afsonline/show_afs', 'http://www.walmart.com/c/mservice/hl/bp/', 'http://www.google.com/ads/search?output', 'http://omniture.walmart.com/b/ss/walmart', 'http://www.walmart.com/prs/getStoreDetai', 'http://www.walmart.com/search/slapInfoSe', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i.walmartimages.com/i/p/00/02/22/', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i.walmartimages.com/i/p/00/88/77/', 'http://i.walmartimages.com/i/p/00/88/78/', 'http://i.walmartimages.com/i/p/00/88/65/', 'http://beam.hlserve.com/beacon?cid', 'http://pubads.g.doubleclick.net/gampad/a', 'http://www.walmart.com/i/search/storePus', 'http://beacon.walmart.com/beacon.gif?u', 'http://beacon.walmart.com/beacon.gif?u', 'http://dw.wmt.co/tap.gif?tap', 'http://dw.wmt.co/confirm.gif?tap', 'http://dw.wmt.co/tap.gif?tap', 'http://beacon.walmart.com/beacon.gif?v', 'http://www.walmart.com/catalog/thirdPart', 'http://www.walmart.com/catalog/thirdPart', 'http://dw.wmt.co/confirm.gif?tap', 'http://i2.walmartimages.com/i/catalog/mo', 'http://i2.walmartimages.com/i/catalog/mo', 'http://i2.walmartimages.com/i/catalog/mo', 'http://i2.walmartimages.com/i/catalog/mo', 'http://i2.walmartimages.com/i/ui/quicklo'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    //the starttime
                    min: " 5750 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                //opposite lets us render the bars horizontally
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 59, 55, 55, 59, 56, 57, 58, 59, 60, 61, 62, 63, 64]
},
{

            showInLegend: false, data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 4, 0, 0, 24, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [5785, 6572, 6572, 6573, 6864, 6903, 6903, 6904, 6904, 6904, 6906, 6908, 6910, 6910, 6910, 6911, 6929, 6929, 6929, 6969, 6969, 6970, 6971, 6971, 6977, 6987, 6987, 6987, 6987, 6996, 6997, 7011, 7011, 7012, 7026, 7026, 7026, 7026, 7089, 7172, 7178, 7217, 7377, 7711, 7800, 7959, 7959, 7959, 7959, 7960, 7960, 7967, 8453, 8460, 8518, 8518, 8550, 8576, 8595, 8634, 8636, 8637, 8641, 8850, 8850, 11810, 11810, 6060]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        var current = 4;        var starttime =  5750 ;
        var endtime =  11843 ;
        if(myline4 !== undefined){
        $(myline4.element).remove();};
        var chart = $('#container4').highcharts();
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
        myline4 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline4 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
