var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  27 ;
        var endtime =  12411 ;
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
                 xAxis: {categories: ['/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/utag/tiqapp/ut', '/dc.js', '/SemiCachedScri', '/__utm.gif?utmw', '/BurstingPipe?c', '/personal/portl', '/personal/appma', '/personal/Phone', '/personal/js/gs', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/js/gs', '/personal/img/s', '/personal/img/s', '/personal/img/p', '/personal/main/'] ,                 alternateGridColor: '#FDFFD5'                 },
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

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 49, 41, 42, 43, 44, 45, 46, 47, 48, 49]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [344, 334, 334, 334, 3, 333, 333, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 2, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [800, 355, 345, 391, 3, 355, 391, 4, 335, 339, 326, 324, 326, 327, 328, 331, 329, 3, 10, 3, 11, 42, 330, 440, 351, 362, 331, 328, 331, 322, 364, 340, 334, 330, 326, 326, 324, 328, 325, 328, 330, 331, 337, 333, 334, 320, 324, 332]
},
{
color: 'transparent',

            showInLegend: false, data: [54, 1213, 1213, 1213, 1214, 1214, 1214, 1236, 2544, 2842, 3182, 9241, 9242, 9242, 9242, 9252, 9254, 9356, 9374, 9375, 9451, 9563, 9566, 9584, 9897, 10025, 10224, 10243, 10249, 10388, 10418, 10556, 10580, 10710, 10782, 10896, 10914, 11041, 11109, 11210, 11222, 11369, 11434, 11538, 11771, 11873, 11889, 12079]
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
        var startPercent = (starttime /  17011 );
        var endPercent = (endtime /  17011 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        console.log("cp " + calculatedPercent);        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
        if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
