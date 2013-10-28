var ml = 150; var myline;            $(function main() {            $('#container').highcharts({                chart: {marginLeft: ml,                    type: 'bar',                    renderTo: 'container'                },                legend: {                    enabled: false                },                tooltip: {                    enabled: false                },                title: {                    text: 'Waterfall'                },                 xAxis: {categories:[]                 },                         yAxis: {                         labels:{ format: "{value:.3f}", formatter: function(){return ((this.value) / 1000) + 's';}},                     min: 0,                    title: {                        text: 'Waterfall'                    }                },                legend: {                    backgroundColor: '#FFFFFF',                    reversed: true                },                plotOptions: {                    series: {                        stacking: 'normal'                    }                },                 series: [
{
            showInLegend: false, data: []}
,
{
            showInLegend: false, data: []}
,
{
            showInLegend: false, data: []}
,
{
color: 'transparent',
            showInLegend: false, data: []}
                ]            });        });        
$(setInterval(function makeline(chart) {if(myline !== undefined){$(myline.element).remove();};var chart = $('#container').highcharts();var element = document.getElementById('media');style = window.getComputedStyle(element);var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));var myheight = $(chart.container).height();var mywidth =  scrollPercent * ($(chart.container).width() - ml) ;myline = chart.renderer.rect(mywidth + ml - 1, 40, 1, myheight *.955).attr({'stroke-width': 2,stroke: 'red',zIndex: 10,}).add();}, 1000));
