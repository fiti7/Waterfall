var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  12141 ;
        var endtime =  33501 ;
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
                 xAxis: {categories: ['/personal/appma', '/personal/js/xm', '/personal/js/ss', '/personal/js/ss', '/personal/js/gs', '/personal/js/gs', '/personal/js/jq', '/personal/js/jq', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/portl', '/personal/appma', '/click?callback', '/__utm.gif?utmw', '/BurstingPipe?c', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/js/gs', '/personal/js/gs'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 12141 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23]
},
{

            showInLegend: false, data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 333, 0, 0, 0, 0, 0, 0, 0, 321, 0, 35, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [16512, 350, 350, 350, 350, 1734, 351, 362, 339, 353, 339, 335, 916, 436, 12, 42, 327, 330, 330, 331, 372]
},
{
color: 'transparent',

            showInLegend: false, data: [12148, 29294, 29294, 29294, 29294, 29294, 29645, 32352, 32374, 32374, 32374, 32797, 32800, 32803, 32853, 32880, 33040, 33040, 33134, 33134, 20995]
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
