var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  27 ;
        var endtime =  7295 ;
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
                 xAxis: {categories: ['/personal/main/', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/utag/tiqapp/ut', '/dc.js', '/SemiCachedScri', '/BurstingPipe?c', '/__utm.gif?utmw', '/personal/portl', '/personal/appma', '/personal/Phone', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/js/gs', '/personal/img/s', '/personal/img/s', '/personal/img/p', '/personal/main/', '/personal/frame'] ,                 alternateGridColor: '#FDFFD5'                 },
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

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 55, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [323, 4, 332, 332, 332, 332, 332, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 6, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [702, 4, 350, 344, 340, 345, 345, 35, 328, 324, 325, 337, 344, 343, 343, 343, 342, 4, 10, 2, 44, 12, 329, 421, 364, 345, 323, 321, 329, 319, 320, 357, 322, 326, 324, 324, 324, 324, 323, 325, 326, 327, 334, 330, 329, 323, 325, 326, 329, 329, 325, 334, 345, 342, 324]
},
{
color: 'transparent',

            showInLegend: false, data: [54, 1098, 1098, 1098, 1098, 1098, 1098, 1113, 2064, 2303, 2628, 3592, 3595, 3595, 3595, 3595, 3596, 3746, 3763, 3782, 3820, 3865, 3930, 3950, 4260, 4273, 4367, 4370, 4371, 4604, 4618, 4624, 4691, 4698, 4701, 4924, 4939, 4982, 5024, 5026, 5249, 5263, 5306, 5348, 5351, 5580, 5590, 5640, 5671, 5679, 5681, 5904, 5917, 6001, 6971]
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
        var startPercent = (starttime /  18690 );
        var endPercent = (endtime /  18690 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
        if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
