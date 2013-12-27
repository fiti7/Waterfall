        //ml is the margin line boundary (for text left of the waterfall)
        var ml = 275;         var myline1; var calculatedPercent = 0;
            $(function main() {
            //different containers are shown/hid to display the different waterfalls
            $('#container1').highcharts({
                chart: {marginLeft: ml,
                    type: 'bar',
                    renderTo: 'container1'
                },
                legend: {
                    enabled: false
                },
                tooltip: {                    enabled: false                },                title: {
                    text: 'Waterfall'                },
                //the axis labels. 
                 xAxis: {categories: ['http://www.vodacom.co.za/personal/main/h', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://tags.tiqcdn.com/utag/vodafone/za-', 'http://www.vodacom.co.za/personal/framew', 'http://tags.tiqcdn.com/utag/vodafone/za-', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://tags.tiqcdn.com/utag/tiqapp/utag.', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://stats.g.doubleclick.net/dc.js', 'http://ds.serving-sys.com/SemiCachedScri', 'https://bs.serving-sys.com/BurstingPipe?', 'http://stats.g.doubleclick.net/__utm.gif', 'http://www.vodacom.co.za/personal/portle', 'http://www.vodacom.co.za/personal/appman', 'http://www.vodacom.co.za/personal/PhoneS', 'http://www.vodacom.co.za/personal/js/gs_', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/js/gs_', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/cs/groups/publi', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/js/gs_', 'http://www.vodacom.co.za/personal/js/gs_', 'http://www.vodacom.co.za/personal/img/se', 'http://www.vodacom.co.za/personal/img/se', 'http://www.vodacom.co.za/personal/img/pr', 'http://www.vodacom.co.za/personal/framew', 'http://www.vodacom.co.za/personal/framew'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    //the starttime
                    min: " 28 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                //opposite lets us render the bars horizontally
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]
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
color: 'blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'light blue',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'dark green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
},
{
color: 'light green',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'pink',

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'orange',

            showInLegend: false, data: [322, 322, 322, 323, 322, 4, 322, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 4, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'yellow',

            showInLegend: false, data: [8, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
color: 'transparent',

            showInLegend: false, data: [56, 971, 971, 971, 971, 972, 972, 982, 2269, 2440, 2761, 3943, 3945, 3948, 3948, 3948, 3948, 3948, 4086, 4087, 4114, 4156, 4266, 4610, 4702, 4713, 4912, 4917, 5012, 5012, 5047, 5050, 5238, 5307, 5336, 5340, 5370, 5371, 5589, 5655, 5691, 5771, 5771, 5910, 5976, 6011, 6091, 6092, 6230, 6266, 6300, 6416, 7387]
,yaxis: 1
}                            ]            });        });        
$(setInterval(
        function makeline(chart) {
        var current = 1;        var starttime =  28 ;
        var endtime =  7443 ;
        if(myline1 !== undefined){
        $(myline1.element).remove();};
        var chart = $('#container1').highcharts();
        var element = document.getElementById('media');
        style = window.getComputedStyle(element);
        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));
        var myheight = $(chart.container).height();
        var startPercent = (starttime /  25058 );
        var endPercent = (endtime /  25058 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
            if ( current == 1){
            chart.renderer.rect(            ((((945 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if ( current == 2){
            chart.renderer.rect(            ((((15086 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)             , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'salmon',zIndex: 4}).add();             }
            if (current == 2){
            chart.renderer.rect(            ((((15205 + starttime)/endtime)              * ($(chart.container).width() - ml)) + ml - 1)            , 60, 1, myheight*.9625).attr(            {'stroke-width': 1,stroke: 'limegreen',zIndex: 4}).add();            }            
if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline1 = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline1 = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
