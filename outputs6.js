var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  21965 ;
        var endtime =  28486 ;
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
                 xAxis: {categories: ['/catalog/produc', '/catalog/produc', '/ip/Fall-Saving', '/css/wmRollup_B', '/css/print_item', '/i/catalog/modu', '/css/itempage.c', '/i/corners/l_co', '/i/if/cat/icn/e', '/i/corners/l_bt', '/i/corners/r_bt', '/i/corners/r_co', '/i/p/00/88/78/9', '/i/sprite/mains', '/i/pcache/ratin', '/i/p/00/88/78/9', '/i/marketplace/', '/i/p/00/88/78/9', '/i/p/00/88/78/9', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/85/41/9', '/i/p/00/66/29/1', '/i/p/00/08/58/5', '/i/p/00/09/26/3', '/i/p/00/88/56/3', '/i/p/00/01/25/0', '/i/p/00/01/38/0', '/i/p/00/73/19/6', '/i/p/00/73/19/6', '/i/p/00/73/19/6', '/i/p/00/84/26/5', '/i/p/00/82/73/9', '/i/p/00/82/73/9', '/i/p/00/82/73/9', '/i/p/00/09/78/5', '/i/p/00/88/61/1', '/i/p/00/09/78/5', '/i/p/00/70/53/8', '/i/p/00/73/62/1', '/i/p/00/88/53/7', '/i/p/00/72/28/6', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/73/70/7', '/i/p/00/73/70/7', '/i/p/00/73/70/7', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/60/64/4', '/i/p/00/74/58/8', '/i/p/00/61/25/7', '/i/style/def/bt', '/i/if/hmp/fusio', '/i/sprite/mains', '/i/p/00/07/57/4', '/i/p/00/87/45/8', '/i/p/00/88/78/9', '/i/p/00/88/71/1', '/i/p/00/88/62/2', '/i/p/00/88/78/9', '/i/buttons/ICN_', '/c/midas/m_ip.j', '/b/ss/walmartco', '/co/updating.ht', '/js/jquery/ui/t', '/beacon.gif?v', '/b/ss/walmartco', '/catalog/thirdP', '/i/corners/corn'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 21965 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
},
{

            showInLegend: false, data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
},
{

            showInLegend: false, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [65, 63, 1185, 2, 2, 2, 3, 5, 5, 4, 4, 2, 5, 3, 2, 5, 2, 4, 4, 6, 3, 4, 6, 5, 6, 5, 5, 5, 5, 5, 4, 6, 4, 4, 3, 3, 4, 5, 10, 9, 7, 18, 7, 6, 6, 4, 5, 4, 6, 5, 5, 7, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 6, 5, 5, 3, 6, 4, 3, 6, 143, 5, 2, 6, 27, 74, 5, 27, 27, 75, 6]
},
{
color: 'transparent',

            showInLegend: false, data: [21968, 21981, 22035, 23230, 23230, 23232, 23492, 23503, 23503, 23504, 23556, 23556, 23570, 23598, 23600, 23625, 23634, 23634, 23634, 23662, 23662, 23663, 23671, 23671, 23679, 23686, 23686, 23686, 23722, 23723, 23724, 23765, 23765, 23766, 23798, 23798, 23798, 23813, 23838, 23838, 23850, 23850, 23850, 23868, 23884, 23890, 23891, 23891, 23891, 23891, 23891, 23895, 23907, 23907, 23907, 23927, 23927, 23927, 23927, 23927, 23944, 23944, 23965, 23988, 23989, 24007, 24008, 24009, 24009, 24009, 24009, 24009, 24010, 24262, 24450, 24979, 25145, 25324, 25358, 25397, 6518]
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
