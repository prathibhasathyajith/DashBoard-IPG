$(document).ready(function () {

    ss(50);
    $(".percentage").text(50 + "%");

    $('.percentage').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + "%");
            }
        });
    });

});





function ss(val) {

    if (val == 0) {
        val = 90;
    }
    $(".circle1").removeClass("circle");
    setTimeout(function () {
        $(".circle1").delay(10).addClass("circle");
    }, 10);

    $(".circle1").attr("stroke-dasharray", val + ",100");


    $(".percentage").text(val + "%");


    $('.percentage').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + "%");
            }
        });
    });




    var colors = ['#2c3e50', '#eb2f06', '#7f8c8d', '#3498db', '#34495e', '#16a085', '#f1c40f', '#d35400', '#f39c12'],
        categories = [
                    "Status-1",
                    "Status-2",
                    "Status-3",
                    "Status-4",
                    "Status-5",
                    "Status-6",
                    "Status-7",
                    "Status-8"
                ],
        data = [{
            "y": 62.74,
            "color": colors[0],
            "name": categories[0]
                }, {
            "y": 10.57,
            "color": colors[1],
            "name": categories[1]
                }, {
            "y": 7.23,
            "color": colors[2],
            "name": categories[2]
                }, {
            "y": 5.58,
            "color": colors[3],
            "name": categories[3]
                }, {
            "y": 4.02,
            "color": colors[4],
            "name": categories[4]
                }, {
            "y": 1.92,
            "color": colors[5],
            "name": categories[5]
                }, {
            "y": 6.62,
            "color": colors[6],
            "name": categories[6]
                }, {
            "y": 1.0,
            "color": colors[7],
            "name": categories[7]
                }],
        versionsData = [],
        i, j,
        dataLen = data.length


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
        versionsData.push({
            name: data[i].name,
            y: data[i].y,
            color: data[i].color
        });
    }

    // Create the chart
    Highcharts.setOptions(Highcharts.dark);
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Status Analytics'
        },
        subtitle: {
            text: 'Transcation Status distribution'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: -10,
            y: 130,
            symbolHeight: 12,
            symbolWidth: 30,
            symbolRadius: 0,
            symbolPadding: 10,
            margin: 10,
            squareSymbol: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            pie: {
                borderWidth: 0,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Status',
            data: versionsData,
            size: '100%',
            innerSize: '60%',
            id: 'status'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{
                        id: 'status',
                        dataLabels: {
                            enabled: false
                        }
                    }]
                }
            }]
        }
    });

}
