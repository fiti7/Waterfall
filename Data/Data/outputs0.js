var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  29 ;
        var endtime =  15596 ;
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
                 xAxis: {categories: ['/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/utag/tiqapp/ut', '/SemiCachedScri', '/dc.js', '/__utm.gif?utmw', '/personal/portl', '/BurstingPipe?c', '/personal/appma', '/personal/Phone', '/personal/js/gs', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/js/gs', '/personal/img/s', '/personal/img/s', '/personal/img/p', '/personal/main/'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 29 ",
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

            showInLegend: false, data: [336, 342, 342, 352, 342, 4, 341, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 9, 0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [3631, 339, 345, 361, 339, 9, 350, 9, 332, 324, 347, 324, 327, 326, 327, 406, 324, 23, 163, 9, 12, 334, 40, 583, 396, 433, 335, 347, 342, 326, 329, 1566, 345, 336, 323, 329, 331, 335, 321, 340, 331, 338, 333, 328, 323, 333, 329, 329]
},
{
color: 'transparent',

            showInLegend: false, data: [58, 4042, 4042, 4042, 4042, 4043, 4043, 4083, 5364, 5391, 5715, 11588, 11589, 11589, 11589, 11599, 11601, 11698, 11717, 11717, 11797, 11912, 11912, 11925, 12246, 12642, 12652, 12760, 12779, 12988, 13077, 13122, 13314, 13406, 13743, 13986, 14031, 14067, 14316, 14403, 14424, 14609, 14638, 14744, 14972, 15073, 15219, 15267]
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
        var startPercent = (starttime /  23270 );
        var endPercent = (endtime /  23270 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        console.log("cp " + calculatedPercent);        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
        if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
