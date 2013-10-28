var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  17470 ;
        var endtime =  19294 ;
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
                 xAxis: {categories: ['/cp/cp/1089430?', '/cp/Laptops/108', '/catalog/browse', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/jsapi?_', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/css/coopbanner', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/b/ss/walmartco', '/beacon.gif?v', '/dis/walmart.as', '/pixel?google_n', '/dis/rtb/google', '/tap.gif?tap', '/tap.gif?tap', '/confirm.gif?ta', '/uds/Gfeeds?cal', '/i/p/11/13/00/0', '/i/p/11/13/00/8', '/i/p/00/88/77/5', '/i/p/00/88/41/1', '/i/p/00/02/22/6', '/i/p/00/88/78/9', '/i/p/00/88/71/1', '/i/p/00/88/65/4', '/i/p/00/88/71/1', '/i/p/00/88/77/5', '/i/p/00/88/65/4', '/i/p/00/88/77/5', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/82/56/3', '/i/p/00/02/22/6', '/i/p/00/88/78/9', '/i/p/00/88/78/9', '/i/p/00/02/22/6', '/i/p/00/88/77/5', '/i/p/00/88/65/4', '/i/p/00/88/77/5', '/i/p/00/88/78/9', '/i/p/00/88/77/5'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 17470 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 21, 21, 21, 21, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
},
{

            showInLegend: false, data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [283, 41, 71, 5, 4, 5, 100, 4, 63, 5, 5, 4, 5, 9, 6, 6, 6, 6, 8, 7, 26, 25, 25, 11, 26, 24, 24, 23, 125, 146, 161, 5, 3, 4, 5, 4, 195, 152, 5, 149, 5, 5, 5, 163, 22, 8, 5, 5, 5, 5, 77, 6, 4]
},
{
color: 'transparent',

            showInLegend: false, data: [17473, 17757, 18125, 18126, 18126, 18127, 18127, 18128, 18195, 18199, 18199, 18199, 18199, 18199, 18200, 18201, 18203, 18205, 18206, 18207, 18354, 18752, 18780, 18805, 18819, 18846, 18877, 18902, 18941, 19119, 19120, 19121, 19123, 19124, 19125, 19127, 19128, 19129, 19130, 19132, 19136, 19141, 19147, 19152, 19266, 19282, 19282, 19282, 19288, 19288, 19288, 19290, 1823]
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
