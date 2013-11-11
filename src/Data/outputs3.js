var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  39176 ;
        var endtime =  48078 ;
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
                 xAxis: {categories: ['/browse/compute', '/css/wmRollup_S', '/js/polarisLeft', '/static/1336sea', '/i/spacer.gif', '/i/if/hmp/fusio', '/i/search/img_X', '/i/sprite/mains', '/i/search/img_b', '/i/search/img_c', '/i/search/img_c', '/js/wmui/search', '/i/p/11/13/00/0', '/js/wmui/cart/a', '/i/fusion/mp/ic', '/i/search/icn.p', '/i/search/bkrnd', '/i/search/btn-t', '/i/catalog/modu', '/i/catalog/modu', '/i/p/11/13/00/8', '/i/fusion/icn_s', '/i/p/11/13/01/3', '/i/p/11/13/01/6', '/i/buttons/atc_', '/i/p/11/13/01/3', '/i/p/11/13/01/3', '/i/p/11/13/01/9', '/js/diffshelf.j', '/js/wmui/search', '/css/s3020.css', '/c/midas/hl.js', '/c/midas/m_bp_h', '/uds/afs?q', '/uds/afs?q', '/b/ss/walmartco', '/prs/getStoreDe', '/search/slapInf', '/gampad/ads?gdf', '/shopping?q', '/shopping?q', '/shopping?q', '/shopping?q', '/beacon.gif?v', '/catalog/thirdP', '/catalog/thirdP', '/tap.gif?tap', '/confirm.gif?ta', '/i/catalog/modu', '/i/catalog/modu', '/i/search/store', '/beacon.gif?u', '/beacon.gif?u', '/i/catalog/modu', '/i/catalog/modu', '/i/ui/quicklook'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 39176 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54]
},
{

            showInLegend: false, data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
},
{

            showInLegend: false, data: [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 39, 0, 0, 0]
},
{

            showInLegend: false, data: [1144, 7, 8, 5, 3, 4, 3, 5, 4, 4, 4, 4, 11, 2, 3, 6, 4, 5, 5, 3, 8, 4, 8, 10, 6, 9, 8, 6, 4, 4, 4, 4, 4, 14, 110, 30, 60, 203, 70, 3, 3, 3, 3, 41, 116, 129, 36, 40, 3, 3, 4, 40, 81, 5, 4, 5]
},
{
color: 'transparent',

            showInLegend: false, data: [39211, 40358, 40358, 40359, 40668, 40690, 40707, 40707, 40707, 40707, 40707, 40709, 40709, 40711, 40713, 40926, 40926, 40947, 41002, 41003, 41003, 41003, 41003, 41003, 41176, 41180, 41181, 41181, 41220, 41220, 41220, 41265, 41265, 41425, 41428, 41472, 41721, 42197, 42314, 43047, 43048, 43055, 43079, 43203, 43207, 43207, 43247, 43283, 43378, 43378, 43395, 43414, 43414, 48108, 48108, 8932]
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
