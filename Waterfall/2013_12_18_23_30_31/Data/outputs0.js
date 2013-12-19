        //ml is the margin line boundary (for text left of the waterfall)
        var ml = 275;         var myline1; var calculatedPercent = 0;
            $(function main() {
            //different containers are shown/hid to display the different waterfalls
            $('#container1').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container1'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                //the axis labels. 
                 xAxis: {categories: ['http://www.walmart.com/cp/Electronics/39', 'http://i2.walmartimages.com/css/bootstra', 'http://p13n-assets.walmart.com/styles/ir', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://p13n-assets.walmart.com/scripts/I', 'http://p13n-assets.walmart.com/scripts/b', 'http://i2.walmartimages.com/css/wmCommon', 'http://i2.walmartimages.com/css/wmRollup', 'http://i2.walmartimages.com/css/wmRollup', 'http://i2.walmartimages.com/i/header_wid', 'http://i2.walmartimages.com/i/spacer.gif', 'http://i2.walmartimages.com/js/rollups/r', 'http://i2.walmartimages.com/i/buttons/IC', 'http://i2.walmartimages.com/js/rollups/f', 'http://i2.walmartimages.com/js/rollups/c', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i2.walmartimages.com/js/bootstrap', 'http://i2.walmartimages.com/js/ajaxVerBr', 'http://i2.walmartimages.com/i/sprite/mai', 'http://www.walmart.com/catalog/browsepat', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i2.walmartimages.com/i/corners/2p', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i2.walmartimages.com/i/footer/HDR', 'http://www.walmart.com/c/midas/loader.js', 'http://i2.walmartimages.com/i/footer/cre', 'http://i2.walmartimages.com/i/opinionlab', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://p13n-assets.walmart.com/scripts/w', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://fls.doubleclick.net/activityi;src', 'http://i.walmartimages.com/i/if/hmp/fusi', 'http://www.google.com/adsense/search/ads', 'http://www.walmart.com/c/midas/hl.js', 'http://www.walmart.com/c/midas/m_cp.js', 'http://fls.doubleclick.net/activityi;src', 'http://1559799.fls.doubleclick.net/activ', 'http://i2.walmartimages.com/i/header_wid', 'http://i2.walmartimages.com/i/sprite/mai', 'http://i2.walmartimages.com/i/header_wid', 'http://www.google.com/ads/search/module/', 'http://i2.walmartimages.com/webanalytics', 'http://cts.channelintelligence.com/84129', 'http://i2.walmartimages.com/js/newSite/r', 'http://i2.walmartimages.com/css/richmedi', 'http://i2.walmartimages.com/css/quickloo', 'http://i2.walmartimages.com/i/footer/fb_', 'http://i2.walmartimages.com/i/footer/mob', 'http://omniture.walmart.com/b/ss/walmart', 'http://www.googletagservices.com/tag/js/', 'http://partner.googleadservices.com/gpt/', 'http://omniture.walmart.com/b/ss/walmart', 'http://beacon.walmart.com/beacon.gif?v', 'http://www.walmart.com/catalog/thirdPart', 'http://dis.criteo.com/dis/walmart.aspx?r', 'http://cm.g.doubleclick.net/pixel?google', 'http://dis.criteo.com/dis/rtb/google/coo', 'http://beacon.walmart.com/tap.gif?tap', 'http://api.choicestream.com/instr/crunch', 'http://i2.walmartimages.com/js/jquery/ui', 'http://i2.walmartimages.com/js/jquery/ui', 'http://ib.adnxs.com/getuid?http%3A%2F%2F'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    //the starttime
                    min: " 35 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                //opposite lets us render the bars horizontally
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 76, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 95, 88, 89, 90, 94, 91, 94, 94, 94, 94, 94, 92, 93, 94]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [4, 4, 8, 4, 7, 8, 3, 3, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 8, 19, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 11, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 34, 15, 3, 0, 23, 0, 22, 4, 0, 0, 4, 0, 0, 34]
},
{
color: 'yellow',

            showInLegend: false, data: [22, 20, 12, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 5, 0, 0, 0, 11, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 36, 33, 8, 0, 7, 0, 16, 7, 0, 0, 11, 0, 0, 13]
},
{
color: 'transparent',

            showInLegend: false, data: [70, 132, 133, 134, 145, 145, 153, 153, 153, 153, 153, 163, 218, 219, 219, 241, 241, 241, 469, 469, 513, 518, 519, 519, 519, 519, 519, 519, 525, 529, 537, 537, 541, 542, 542, 542, 545, 552, 565, 565, 565, 565, 566, 566, 570, 570, 571, 571, 581, 581, 581, 581, 582, 583, 585, 593, 593, 593, 593, 595, 595, 597, 597, 597, 601, 602, 602, 604, 607, 607, 657, 657, 668, 673, 673, 673, 683, 697, 735, 736, 736, 737, 826, 826, 827, 827, 827, 852, 852, 877, 880, 970, 973, 1355, 1358, 1410, 1473, 1497, 1524, 1550, 1623, 1623, 1607]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        var current = 1;        var starttime =  35 ;
        var endtime =  1749 ;
        if(myline1 !== undefined){
        $(myline1.element).remove();};
        var chart = $('#container1').highcharts();
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
        myline1 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline1 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
