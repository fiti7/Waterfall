var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  12415 ;
        var endtime =  17011 ;
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
                 xAxis: {categories: ['/personal/appma', '/personal/js/xm', '/personal/js/ss', '/personal/js/ss', '/personal/js/gs', '/personal/js/gs', '/personal/js/jq', '/personal/js/jq', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/portl', '/personal/appma', '/click?callback', '/__utm.gif?utmw', '/BurstingPipe?c', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/js/gs'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 12415 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22]
},
{

            showInLegend: false, data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 316, 0, 34, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [1456, 487, 487, 462, 472, 487, 332, 330, 332, 331, 332, 351, 449, 443, 11, 39, 333, 325, 352, 418]
},
{
color: 'transparent',

            showInLegend: false, data: [12419, 13998, 13998, 13999, 13999, 13999, 14471, 15475, 15498, 15499, 15499, 15886, 15889, 15892, 15940, 15968, 16134, 16134, 16243, 4182]
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
