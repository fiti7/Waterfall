var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  19328 ;
        var endtime =  20781 ;
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
                 xAxis: {categories: ['/browse/compute', '/css/wmRollup_S', '/js/polarisLeft', '/static/1336sea', '/i/if/hmp/fusio', '/i/search/sprit', '/js/wmui/search', '/js/wmui/cart/a', '/i/search/best_', '/i/p/11/13/00/0', '/i/fusion/mp/ic', '/i/search/bkrnd', '/i/sprite/mains', '/i/search/icn.p', '/i/search/btn-t', '/i/p/11/13/01/3', '/i/p/11/13/01/3', '/i/p/11/13/00/8', '/i/catalog/modu', '/i/catalog/modu', '/i/buttons/atc_', '/i/fusion/icn_s', '/i/p/11/13/03/3', '/i/p/11/13/01/6', '/i/p/11/13/01/9', '/i/p/11/13/01/3', '/i/p/11/13/03/8', '/js/diffshelf.j', '/js/wmui/search', '/css/s3020.css', '/c/midas/m_defa', '/afsonline/show', '/ads/search?out', '/b/ss/walmartco', '/prs/getStoreDe', '/search/slapInf', '/gampad/ads?gdf', '/i/search/store', '/beacon.gif?u', '/beacon.gif?v', '/catalog/thirdP', '/catalog/thirdP', '/tap.gif?tap', '/confirm.gif?ta', '/tap.gif?tap', '/confirm.gif?ta', '/pagead/gen_204', '/i/search/img_c', '/i/catalog/modu', '/i/catalog/modu'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 19328 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 39, 40, 41, 41, 42, 42, 43, 44, 45, 46]
},
{

            showInLegend: false, data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
},
{

            showInLegend: false, data: [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 22, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [36, 3, 3, 3, 2, 51, 5, 4, 4, 6, 4, 6, 5, 7, 7, 5, 5, 8, 3, 3, 2, 3, 9, 7, 5, 6, 5, 4, 4, 4, 11, 9, 110, 29, 7, 89, 62, 7, 95, 48, 77, 77, 23, 23, 23, 23, 13, 4, 3, 4]
},
{
color: 'transparent',

            showInLegend: false, data: [19362, 19400, 19401, 19401, 19677, 19713, 19715, 19715, 19716, 19717, 19717, 19731, 19731, 19731, 19734, 19774, 19774, 19774, 19775, 19775, 19781, 19786, 19786, 19787, 19800, 19801, 19801, 19801, 19801, 19814, 19857, 19915, 19948, 20104, 20352, 20420, 20523, 20549, 20553, 20626, 20628, 20628, 20650, 20674, 20697, 20755, 20784, 20810, 20811, 1483]
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
