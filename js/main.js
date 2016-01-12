$(function () {
    $('.user-signup-chart').highcharts({
        chart: {
            type: 'areaspline',
            width: 750,
            marginBottom: 50

        },
        title: {
            text: 'Recent Users'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            x: 325,
            y: 20,
            floating: true,
            borderWidth: 0,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
        },
         series: [{
            data: [0, 1, 2, 3, 4, 5, 6]
        }],
        yAxis: {
            title: {
                text: 'Signups Per Day'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Users',
            data: [2.6, 3.75, 2.6, 5, 3.75, 10, 12.3]
        }]
    });
});