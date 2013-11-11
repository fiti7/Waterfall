var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  50770 ;
        var endtime =  59365 ;
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
                 xAxis: {categories: ['/catalog/produc', '/ip/Hot-Holiday', '/ip/Hot-Holiday', '/b/ss/walmartco', '/css/wmRollup_B', '/css/print_item', '/i/catalog/modu', '/ip/Hot-Holiday', '/css/itempage.c', '/i/corners/l_co', '/i/if/cat/icn/e', '/i/corners/l_bt', '/i/if/hmp/fusio', '/i/corners/r_bt', '/i/corners/r_co', '/i/p/00/88/62/2', '/i/p/00/88/65/4', '/i/p/00/88/71/1', '/i/sprite/mains', '/i/pcache/ratin', '/i/p/00/88/78/9', '/i/p/00/88/78/9', '/i/marketplace/', '/i/p/00/88/78/9', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/88/41/1', '/i/p/00/85/41/9', '/i/p/00/66/29/1', '/i/p/00/08/58/5', '/i/p/00/09/26/3', '/i/p/00/88/77/5', '/i/p/00/01/38/0', '/i/p/00/01/38/0', '/i/p/00/73/19/6', '/i/p/00/73/19/6', '/i/p/00/73/19/6', '/i/p/00/09/78/5', '/i/p/00/88/61/1', '/i/p/00/09/78/5', '/i/p/00/70/53/8', '/i/p/00/73/62/1', '/i/p/00/88/53/7', '/i/p/00/72/28/6', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/73/70/7', '/i/p/00/73/70/7', '/i/p/00/73/70/7', '/i/p/00/81/12/7', '/i/p/00/81/12/7', '/i/p/00/81/12/7', '/i/p/00/81/12/7', '/i/p/00/81/12/7', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/68/11/3', '/i/p/00/84/59/7', '/i/marketplace/', '/i/p/00/60/64/4', '/i/p/00/74/58/8', '/i/p/00/84/26/5', '/i/p/00/82/73/9', '/i/p/00/82/73/9', '/i/style/def/bt', '/i/if/hmp/fusio', '/i/sprite/mains', '/c/midas/m_ip.j', '/co/updating.ht', '/js/jquery/ui/t', '/beacon.gif?v', '/catalog/thirdP'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 50770 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]
},
{

            showInLegend: false, data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
},
{

            showInLegend: false, data: [0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [101, 1982, 1758, 54, 5, 4, 4, 274, 5, 5, 3, 4, 3, 4, 5, 7, 12, 6, 5, 4, 9, 8, 3, 8, 7, 5, 6, 4, 6, 7, 7, 6, 6, 7, 5, 6, 7, 7, 7, 6, 5, 9, 17, 11, 8, 8, 8, 7, 7, 7, 7, 5, 7, 4, 4, 5, 3, 5, 4, 6, 5, 3, 4, 4, 8, 25, 3, 5, 5, 5, 8, 5, 6, 4, 4, 3, 5, 121, 4, 42, 92]
},
{
color: 'transparent',

            showInLegend: false, data: [50773, 50877, 51015, 51512, 52839, 52839, 52841, 53549, 54978, 55013, 55014, 55014, 55015, 55286, 55286, 55515, 55516, 55516, 55557, 55559, 55573, 55574, 55574, 55574, 55786, 55786, 55786, 55787, 55787, 56032, 56033, 56033, 56033, 56350, 56350, 56351, 56413, 56420, 56420, 56436, 56451, 56451, 56522, 56522, 56522, 56552, 56552, 56553, 56553, 56553, 56553, 56561, 56561, 56779, 56779, 56779, 56797, 56797, 56797, 56797, 56797, 56798, 57039, 57039, 57039, 57039, 57040, 57040, 57307, 57307, 57307, 57326, 57326, 57351, 57358, 57532, 57774, 58989, 59146, 59231, 8506]
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
