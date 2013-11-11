var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  48144 ;
        var endtime =  50767 ;
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
                 xAxis: {categories: ['/i/quicklook/Pr', '/i/quicklook/Ne', '/catalog/quickl', '/i/p/11/13/00/8', '/i/quicklook/Ne', '/i/quicklook/QL', '/i/quicklook/bt', '/i/quicklook/Pr', '/css/quicklook.', '/css/overlay.cs', '/js/flyout/magi', '/i/p/11/13/00/0', '/images/PinExt.', '/domain.html', '/i/ui/quicklook', '/i/ui/quicklook', '/i/ui/quicklook', '/i/errors/BKG_V', '/i/errors/BKG_V', '/i/p/11/13/00/0', '/beacon.gif?v'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 48144 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
},
{

            showInLegend: false, data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [5, 15, 311, 6, 3, 3, 3, 40, 4, 3, 3, 5, 6, 7, 5, 2, 10, 4, 5, 4, 40]
},
{
color: 'transparent',

            showInLegend: false, data: [48146, 48148, 48166, 48654, 48947, 48947, 48947, 48947, 48954, 48954, 48954, 48954, 48955, 49767, 49772, 49897, 49902, 49927, 49928, 50144, 2585]
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
        var startPercent = (starttime /  59365 );
        var endPercent = (endtime /  59365 );
        calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
        console.log("cp " + calculatedPercent);        var mywidth =  (calculatedPercent * ($(chart.container).width() - ml)) + ml - 1 ;
        if ((0 <= calculatedPercent) && (calculatedPercent <=1)){
        myline = chart.renderer.rect(mywidth, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();}        if(0 > calculatedPercent){ myline = chart.renderer.rect(ml, 60, 1, myheight*.9625).attr(
        {'stroke-width': 2,stroke: 'red',zIndex: 10}).add();} }, 100));
