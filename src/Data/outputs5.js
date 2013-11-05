var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  20848 ;
        var endtime =  21962 ;
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
                 xAxis: {categories: ['/i/quicklook/Pr', '/i/quicklook/Ne', '/catalog/quickl', '/i/p/11/13/00/8', '/i/quicklook/Pr', '/i/quicklook/Ne', '/i/quicklook/bt', '/i/quicklook/QL', '/css/quicklook.', '/css/overlay.cs', '/images/PinExt.', '/js/flyout/magi', '/i/p/11/13/00/0', '/domain.html', '/i/ui/quicklook', '/i/ui/quicklook', '/i/ui/quicklook', '/b/ss/walmartco', '/i/errors/BKG_V', '/i/errors/BKG_V', '/i/p/11/13/00/0', '/beacon.gif?v'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 20848 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
},
{

            showInLegend: false, data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [19, 7, 559, 5, 4, 5, 30, 6, 5, 3, 3, 4, 10, 8, 4, 93, 5, 27, 3, 3, 5, 26]
},
{
color: 'transparent',

            showInLegend: false, data: [20852, 20853, 20870, 20944, 20963, 20963, 20963, 20963, 21434, 21434, 21434, 21434, 21434, 21702, 21762, 21771, 21775, 21806, 21816, 21816, 21848, 1092]
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
        var startPercent = (starttime /  28486 );
        var endPercent = (endtime /  28486 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        console.log("cp " + calculatedPercent);        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
        if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
