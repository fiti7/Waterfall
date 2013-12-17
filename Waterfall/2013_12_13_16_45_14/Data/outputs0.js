var current = 1;        var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  26 ;
        var endtime =  6540 ;
            $(function main() {
            $('#container').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                 xAxis: {categories: ['/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/tiqapp/ut', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/dc.js', '/SemiCachedScri', '/BurstingPipe?c', '/__utm.gif?utmw', '/personal/portl', '/personal/frame', '/personal/appma', '/personal/Phone', '/personal/frame', '/personal/js/gs', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/personal/js/gs', '/personal/js/gs', '/personal/img/s', '/personal/img/s', '/personal/img/p', '/personal/frame', '/personal/main/', '/personal/frame'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 26 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 53, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [325, 326, 326, 326, 327, 6, 325, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 5, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [67, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 10, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [52, 1122, 1122, 1122, 1122, 1123, 1123, 1132, 2078, 2430, 2752, 3784, 3786, 3786, 3786, 3786, 3787, 3787, 3927, 3927, 3977, 4004, 4125, 4126, 4126, 4126, 4454, 4460, 4476, 4530, 4535, 4775, 4797, 4827, 4856, 4951, 5141, 5141, 5154, 5169, 5207, 5271, 5468, 5468, 5480, 5488, 5535, 5590, 5791, 5804, 5810, 5861, 6485]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        if(myline !== undefined){
        $(myline.element).remove();};
        var chart = $('#container').highcharts();
        var element = document.getElementById('media');
        style = window.getComputedStyle(element);
        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));
        var myheight = $(chart.container).height();
        var startPercent = (starttime /  25683 );
        var endPercent = (endtime /  25683 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
            if ( current == 1){
            chart.renderer.rect(            ((((1096 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if ( current == 2){
            chart.renderer.rect(            ((((15982 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){
            chart.renderer.rect(            ((((16099 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
