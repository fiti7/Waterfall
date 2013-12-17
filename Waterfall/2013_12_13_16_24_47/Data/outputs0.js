var current = 1;        var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  27 ;
        var endtime =  7129 ;
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
                 xAxis: {categories: ['/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/tiqapp/ut', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/SemiCachedScri', '/dc.js', '/BurstingPipe?c', '/__utm.gif?utmw', '/personal/portl', '/personal/appma', '/personal/Phone', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/img/s', '/personal/img/s', '/personal/img/p', '/personal/main/', '/personal/frame'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 27 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 50, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [331, 328, 328, 328, 6, 327, 325, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 11, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [7, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [54, 1088, 1088, 1088, 1089, 1089, 1089, 1095, 2292, 2569, 2894, 3944, 3946, 3948, 3949, 3949, 3949, 3949, 4058, 4058, 4092, 4135, 4292, 4292, 4292, 4293, 4621, 4621, 4655, 4710, 4713, 4943, 4950, 5013, 5042, 5267, 5273, 5342, 5412, 5593, 5596, 5665, 5693, 5734, 5913, 5920, 5987, 6016, 6064, 7077]
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
        var startPercent = (starttime /  24944 );
        var endPercent = (endtime /  24944 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
            if ( current == 1){
            chart.renderer.rect(            ((((1070 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if ( current == 2){
            chart.renderer.rect(            ((((940 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){
            chart.renderer.rect(            ((((1067 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
