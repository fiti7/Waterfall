var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  1002 ;
        var endtime =  33261 ;
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
                 xAxis: {categories: ['/cp/Electronics', '/css/bootstrap.', '/styles/irs.1.1', '/i/if/hmp/fusio', '/scripts/IRSReq', '/scripts/bootst', '/css/wmCommon.c', '/css/wmRollup_B', '/css/wmRollup_O', '/i/header_wide/', '/i/spacer.gif', '/js/rollups/rum', '/i/buttons/ICN_', '/js/rollups/fou', '/js/rollups/cat', '/i/sprite/mains', '/i/sprite/mains', '/i/sprite/mains', '/js/bootstrap.m', '/js/ajaxVerBrea', '/i/sprite/mains', '/catalog/browse', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/corners/2pix', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/c/midas/loader', '/i/if/hmp/fusio', '/i/footer/HDR_e', '/i/footer/credi', '/i/opinionlab/s', '/img/common/com', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/scripts/www.wa', '/activityi;src', '/i/if/hmp/fusio', '/adsense/search', '/c/midas/m_cp.j', '/activityi;src', '/activityi;src', '/ads/search/mod', '/webanalytics/o', '/841291_landing', '/js/newSite/rol', '/css/quicklook_', '/css/richmedia.', '/i/footer/fb_30', '/i/footer/mobil', '/b/ss/walmartco', '/tag/js/gpt.js', '/b/ss/walmartco', '/gpt/pubads_imp', '/beacon.gif?v', '/catalog/thirdP', '/dis/walmart.as', '/pixel?google_n', '/dis/rtb/google', '/tap.gif?tap', '/w?redir', '/pixel?google_n', '/pxgcm?id', '/fr/u.php?p', '/js/jquery/ui/t', '/js/jquery/ui/t', '/pxfbcm?s'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 1002 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 76, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 91, 85, 86, 87, 92, 88, 93, 94, 95, 96, 97, 98, 99, 100, 89, 90, 101]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [4, 3, 4, 3, 4, 4, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 22, 3, 0, 3, 38, 0, 26, 4, 0, 0, 23, 0, 0, 2, 0, 0, 0]
},
{

            showInLegend: false, data: [14, 3, 3, 3, 3, 3, 3, 3, 161, 4, 4, 3, 3, 4, 7, 38, 4, 4, 5, 3, 4, 107, 4, 6, 8, 9, 8, 5, 0, 6, 6, 4, 14, 5, 12, 11, 10, 71, 5, 4, 3, 4, 4, 8, 2, 65, 5, 6, 7, 9, 7, 4, 6, 4, 3, 50, 4, 4, 3, 4, 6, 5, 2, 4, 5, 5, 6, 4, 3, 3, 12, 5, 11, 3, 16, 5, 11, 13, 18, 4, 3, 3, 3, 3, 4, 5, 24, 4, 28, 2, 40, 181, 25, 11, 28, 38, 25, 11, 42, 105, 40, 6, 23]
},
{
color: 'transparent',

            showInLegend: false, data: [2004, 3239, 3240, 3241, 3281, 3281, 3299, 3299, 3299, 3299, 3299, 4740, 5497, 5498, 5498, 6248, 6248, 6248, 10005, 10005, 10051, 10241, 10245, 10245, 10245, 10246, 10246, 10246, 10246, 10250, 10259, 10260, 10261, 10261, 10265, 10265, 10277, 10277, 10279, 10279, 10280, 10280, 10280, 10284, 10284, 10285, 10285, 10286, 10288, 10290, 10293, 10293, 10296, 10298, 10300, 10300, 10301, 10301, 10301, 10301, 10304, 10304, 10304, 10307, 10309, 10311, 10312, 10314, 10316, 10489, 10490, 10497, 31335, 31353, 31357, 31358, 31375, 31388, 31406, 31493, 31493, 31494, 31494, 31494, 31513, 31513, 32249, 32263, 32385, 32536, 33489, 33492, 33596, 33670, 33709, 33737, 33776, 33865, 33877, 33920, 34057, 34057, 33238]
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
