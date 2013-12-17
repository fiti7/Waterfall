var current = 2;        var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  1746 ;
        var endtime =  3485 ;
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
                 xAxis: {categories: ['/cp/3951?povid', '/cart2/pCartIni', '/catalog/browse', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/b/ss/walmartco', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/catalog/modu', '/catalog/thirdP', '/beacon.gif?v', '/cm?in', '/tap.gif?tap', '/r/dd/id/L21rdC', '/tap.gif?tap', '/tap.gif?tap', '/confirm.gif?ta'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 1746 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 37, 37, 37, 37, 37]
},
{

            showInLegend: false, data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 22, 0, 23, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0, 91, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [1749, 2294, 2321, 2321, 2322, 2322, 2322, 2322, 2322, 2328, 2335, 2348, 2363, 2370, 2384, 2392, 2403, 2413, 2413, 2414, 2420, 2434, 2449, 2459, 2469, 2480, 2482, 2496, 2501, 2514, 2542, 2542, 2545, 2547, 2927, 2994, 3009, 3034, 3106, 3225, 3281, 3309, 1703]
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
        var startPercent = (starttime /  15089 );
        var endPercent = (endtime /  15089 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
            if ( current == 1){
            chart.renderer.rect(            ((((75 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if ( current == 2){
            chart.renderer.rect(            ((((267 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){
            chart.renderer.rect(            ((((528 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 3){
            chart.renderer.rect(            ((((369 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 3){
            chart.renderer.rect(            ((((652 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 4){
            chart.renderer.rect(            ((((745 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 4){
            chart.renderer.rect(            ((((973 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
            if ( current == 7){
            chart.renderer.rect(            ((((929 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 7){
            chart.renderer.rect(            ((((1285 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
