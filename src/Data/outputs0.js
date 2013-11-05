var ml = 150; var myline; var calculatedPercent = 0;
        var starttime =  34 ;
        var endtime =  6352 ;
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
                 xAxis: {categories: ['/personal/main/', '/cp/Electronics', '/css/bootstrap.', '/styles/irs.1.1', '/css/search/wmC', '/css/search/wmS', '/i/if/hmp/fusio', '/css/wmCommon.c', '/css/wmRollup_B', '/css/wmRollup_O', '/i/header_wide/', '/i/spacer.gif', '/js/rollups/rum', '/scripts/IRSReq', '/scripts/bootst', '/js/rollups/fou', '/js/rollups/cat', '/js/bootstrap.m', '/i/sprite/mains', '/i/sprite/mains', '/i/sprite/mains', '/js/polarisLeft', '/js/ajaxVerBrea', '/i/spacer.gif', '/i/sprite/mains', '/catalog/browse', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/corners/2pix', '/i/search/sprit', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/footer/credi', '/i/opinionlab/s', '/c/midas/loader', '/i/if/hmp/fusio', '/i/footer/HDR_e', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/i/if/hmp/fusio', '/scripts/www.wa', '/i/header_wide/', '/i/sprite/mains', '/i/header_wide/', '/i/if/hmp/fusio', '/activityi;src', '/adsense/search', '/c/midas/m_cp.j', '/activityi;src', '/activityi;src', '/ads/search/mod', '/personal/frame', '/personal/frame', '/personal/frame', '/utag/vodafone/', '/personal/frame', '/personal/frame', '/webanalytics/o', '/js/newSite/rol', '/841291_landing', '/css/richmedia.', '/css/quicklook_', '/i/footer/fb_30', '/i/footer/mobil', '/b/ss/walmartco', '/tag/js/gpt.js', '/b/ss/walmartco', '/gpt/pubads_imp', '/beacon.gif?v', '/catalog/thirdP', '/cm?in', '/tap.gif?tap', '/w?redir', '/js/jquery/ui/t', '/js/jquery/ui/t', '/pixel?google_n', '/pxgcm?id', '/fr/u.php?p', '/pxfbcm?s', '/tap.gif?tap', '/personal/frame', '/dis/walmart.as', '/pixel?google_n', '/personal/frame', '/utag/tiqapp/ut', '/widgets.js', '/personal/frame', '/personal/frame', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/updat', '/dc.js', '/personal/portl', '/personal/Phone', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/cs/groups/publ', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/main/', '/personal/frame', '/personal/frame', '/personal/frame', '/personal/js/gs', '/personal/js/gs', '/personal/img/s', '/personal/img/s', '/cs/groups/publ', '/personal/main/'] ,                 alternateGridColor: '#FDFFD5'                 },
                         yAxis: [{
                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                    min: " 34 ",
                    title: false,
                },{                linkedTo:0,                labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}}, 
                title: false,
                opposite:true                }],                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },
                plotOptions: {                    series: {                        stacking: 'normal'                    }                },
                 series: [
{

            showInLegend: false, data: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 80, 78, 79, 80, 80, 81, 2, 3, 4, 5, 6, 7, 82, 83, 84, 85, 86, 87, 88, 95, 89, 90, 91, 96, 92, 97, 98, 99, 93, 94, 100, 101, 102, 103, 104, 8, 105, 106, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 52, 44, 45, 46, 47, 48, 49, 50, 51, 52]
},
{

            showInLegend: false, data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
},
{

            showInLegend: false, data: [323, 3, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4, 3, 0, 102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10, 0, 0, 2, 0, 324, 324, 325, 2, 323, 324, 0, 0, 2, 0, 0, 0, 0, 23, 4, 0, 5, 22, 0, 20, 0, 22, 0, 0, 3, 0, 3, 0, 0, 0, 24, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 320, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{

            showInLegend: false, data: [979, 34, 5, 5, 3, 3, 2, 3, 3, 5, 2, 3, 2, 5, 5, 3, 4, 6, 4, 2, 2, 9, 5, 3, 2, 71, 2, 4, 5, 6, 5, 3, 3, 100, 5, 9, 11, 13, 10, 45, 16, 4, 5, 4, 4, 5, 5, 4, 5, 4, 3, 3, 6, 3, 7, 5, 5, 4, 5, 6, 5, 6, 4, 2, 5, 3, 5, 4, 4, 3, 4, 5, 5, 4, 2, 2, 1, 3, 10, 11, 6, 11, 12, 16, 333, 348, 347, 38, 348, 347, 3, 2, 3, 2, 2, 3, 3, 25, 2, 26, 2, 27, 76, 21, 24, 22, 2, 2, 11, 22, 102, 22, 23, 320, 26, 12, 320, 9, 5, 320, 320, 327, 323, 331, 332, 391, 10, 332, 323, 380, 321, 321, 320, 320, 320, 318, 320, 355, 319, 319, 319, 323, 337, 319, 319, 319, 319, 319, 319, 319, 320, 321, 325, 320, 356, 358]
},
{
color: 'transparent',

            showInLegend: false, data: [68, 76, 573, 574, 575, 576, 576, 634, 634, 634, 634, 634, 639, 655, 655, 695, 695, 695, 717, 717, 717, 938, 938, 938, 980, 984, 985, 985, 986, 986, 986, 987, 988, 991, 992, 996, 997, 999, 1008, 1008, 1011, 1052, 1053, 1053, 1053, 1054, 1054, 1058, 1058, 1059, 1059, 1059, 1059, 1059, 1060, 1061, 1062, 1064, 1065, 1066, 1066, 1068, 1068, 1069, 1070, 1072, 1073, 1074, 1074, 1074, 1077, 1078, 1078, 1082, 1217, 1217, 1218, 1328, 1328, 1342, 1342, 1362, 1374, 1384, 1385, 1385, 1385, 1386, 1386, 1386, 1473, 1474, 1474, 1474, 1474, 1493, 1493, 1513, 1527, 1601, 1624, 2028, 2032, 2100, 2184, 2210, 2275, 2275, 2295, 2329, 2352, 2496, 2519, 2531, 2545, 2615, 2698, 3742, 3744, 3746, 3746, 3750, 3751, 3751, 3751, 3784, 3962, 4067, 4399, 4500, 4510, 4510, 4712, 4723, 4827, 4832, 4883, 5033, 5044, 5148, 5151, 5248, 5364, 5389, 5467, 5470, 5572, 5622, 5702, 5708, 5787, 5789, 5891, 5942, 6022, 5994]
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
