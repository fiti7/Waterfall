var current = 1;        var ml = 275; var myline; var calculatedPercent = 0;
        var starttime =  29 ;
        var endtime =  6574 ;
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
                 xAxis: {categories: ['http://www.vodacom.co.za/personal/main/h', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://tags.tiqcdn.com/utag/vodafone/za-', 'http://tags.tiqcdn.com/utag/vodafone/za-', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://tags.tiqcdn.com/utag/tiqapp/utag.', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://stats.g.doubleclick.net/dc.js', 'http://ds.serving-sys.com/SemiCachedScri', 'https://bs.serving-sys.com/BurstingPipe?', 'http://stats.g.doubleclick.net/__utm.gif', 'http://www.vodacom.co.za/personal/portle', 'http://www.vodacom.co.za/personal/appman', 'http://www.vodacom.co.za/personal/PhoneS', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/js/gs_', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/personal/js/gs_', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/main/i', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/img/se', 'http://www.vodacom.co.za/personal/img/se', 'http://www.vodacom.co.za/personal/img/pr', 'http://www.vodacom.co.za/personal/main/p', 'http://www.vodacom.co.za/personal/framew'] ,                 alternateGridColor: '#FDFFD5'                 },
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

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 50, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
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

            showInLegend: false, data: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [336, 325, 325, 325, 326, 326, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 5, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [6, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 8, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [58, 1036, 1036, 1036, 1036, 1036, 1037, 1077, 2316, 2369, 2701, 3922, 3930, 3931, 3931, 3931, 3932, 3932, 4044, 4045, 4078, 4119, 4256, 4259, 4265, 4266, 4266, 4587, 4591, 4597, 4627, 4733, 4929, 4952, 4953, 5064, 5218, 5254, 5272, 5277, 5421, 5540, 5576, 5580, 5600, 5608, 5750, 5871, 5925, 6522]
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
        var startPercent = (starttime /  24289 );
        var endPercent = (endtime /  24289 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
            if ( current == 1){
            chart.renderer.rect(            ((((1011 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if ( current == 2){
            chart.renderer.rect(            ((((574 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){
            chart.renderer.rect(            ((((706 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
