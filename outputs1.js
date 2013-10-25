var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  6355 ;
        var endtime =  17467 ;
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
                 xAxis: {categories: ['/cp/3951?povid', '/personal/appma', '/cart2/pCartIni', '/catalog/browse', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/jsapi?_', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/uds/?file', '/b/ss/walmartco', '/uds/api/feeds/', '/catalog/thirdP', '/beacon.gif?v', '/r/dd/id/L21rdC', '/tap.gif?tap', '/tap.gif?tap', '/i/catalog/modu', '/uds/Gfeeds?cal', '/i/p/00/82/56/3', '/i/p/00/88/77/5', '/i/p/00/88/78/9', '/i/p/11/13/01/3', '/i/p/11/13/00/0', '/i/p/11/13/00/1', '/i/p/00/88/41/1', '/i/p/00/88/77/5', '/i/p/00/82/56/3', '/i/p/00/82/56/3', '/i/p/00/88/71/1', '/i/p/00/82/56/3', '/i/p/00/82/56/3', '/i/p/00/82/56/3', '/i/p/00/88/78/9', '/i/p/00/82/56/3', '/i/p/00/82/56/3', '/i/p/00/82/56/3', '/i/p/00/82/56/3', '/i/p/00/88/78/9', '/i/p/00/82/56/3', '/i/p/00/88/65/4', '/i/p/00/82/56/3', '/i/p/00/84/86/0', '/i/p/00/88/78/9', '/confirm.gif?ta', '/i/if/hmp/fusio', '/personal/js/xm', '/personal/js/ss', '/personal/js/ss', '/personal/js/gs', '/personal/js/gs', '/personal/js/jq', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/updat', '/personal/portl', '/click?callback', '/personal/js/gs', '/personal/js/gs'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 6355 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 68, 68, 68, 68, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20]
},
{

            showInLegend: false, data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 328, 0, 0, 0, 0, 0, 0, 315, 0, 0]
},
{

            showInLegend: false, data: [41, 444, 91, 71, 4, 5, 3, 2, 5, 5, 6, 6, 10, 12, 6, 5, 63, 8, 17, 5, 13, 5, 5, 6, 6, 5, 4, 6, 5, 5, 7, 13, 12, 13, 14, 19, 21, 130, 27, 11, 74, 25, 24, 24, 23, 3, 64, 4, 5, 6, 9, 7, 6, 5, 7, 7, 6, 10, 9, 3, 7, 7, 8, 6, 8, 8, 8, 5, 5, 5, 6, 7, 22, 4, 329, 326, 329, 326, 328, 330, 325, 325, 325, 321, 323, 395, 356, 347]
},
{
color: 'transparent',

            showInLegend: false, data: [6358, 6360, 6722, 6757, 6758, 6758, 6758, 6759, 6759, 6759, 6762, 6767, 6768, 6768, 6768, 6841, 6842, 6842, 6842, 6843, 6843, 6843, 6846, 6849, 6850, 6851, 6851, 6855, 6856, 6858, 6859, 6859, 6861, 6861, 6862, 6867, 6867, 6974, 7027, 7146, 7461, 7513, 7540, 7626, 7653, 7698, 7763, 7880, 7881, 7882, 7883, 7885, 7886, 7887, 7888, 7889, 7893, 7893, 7894, 7895, 7896, 7897, 7899, 7900, 7904, 7904, 7904, 7905, 7907, 7907, 7910, 7913, 7972, 7983, 14732, 14732, 14732, 14732, 14733, 16029, 16046, 16046, 16046, 16384, 16434, 16437, 16764, 10768]
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
