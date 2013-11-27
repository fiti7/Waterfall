var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  35 ;
        var endtime =  12134 ;
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
                 xAxis: {categories: ['/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/utag/vodafone/', '/utag/tiqapp/ut', '/m2/vodacom/mbo', '/dc.js', '/SemiCachedScri', '/__utm.gif?utmw', '/BurstingPipe?c', '/personal/portl', '/personal/appma', '/personal/Phone', '/cs/groups/publ', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/img/s', '/personal/img/s', '/personal/img/p', '/personal/main/'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 35 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 55, 49, 50, 51, 52, 53, 54, 55]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [324, 335, 335, 335, 4, 334, 334, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 32, 11, 7, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [672, 388, 388, 418, 4, 405, 388, 35, 329, 335, 332, 337, 373, 369, 369, 337, 341, 5, 3, 33, 12, 165, 13, 38, 334, 469, 373, 1074, 426, 333, 336, 324, 458, 351, 352, 337, 328, 323, 326, 336, 343, 345, 333, 330, 2507, 329, 329, 324, 331, 327, 327, 337, 335, 330]
},
{
color: 'transparent',

            showInLegend: false, data: [70, 1100, 1100, 1100, 1101, 1101, 1101, 1106, 2492, 2975, 3310, 7005, 7005, 7005, 7005, 7005, 7005, 7272, 7301, 7315, 7317, 7318, 7381, 7504, 8236, 8343, 8475, 8570, 8813, 8849, 9182, 9239, 9316, 9351, 9518, 9563, 9708, 9775, 9870, 10099, 10186, 10196, 10435, 10529, 10632, 10700, 10779, 11108, 11432, 11452, 11512, 11763, 11779, 11804]
,yaxis: 1}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        if(myline !== undefined){
        $(myline.element).remove();};
        var chart = $('#container').highcharts();
        var element = document.getElementById('media');
        style = window.getComputedStyle(element);
        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));
        var myheight = $(chart.container).height();
        var startPercent = (starttime /  33501 );
        var endPercent = (endtime /  33501 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
        if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
