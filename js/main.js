let graph = document.getElementById('graph').getContext('2d');

new Chart(graph, {
    type: 'line',
    data: {
        labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov', '11Nov', '12Nov', '13Nov', '14Nov', '15Nov'],
        datasets: [
            {
                label: 'ETH',
                data: [100, 400, 600, 700, 500, 400, 300, 200, 100, 200, 700],
                borderColor: 'skyblue',
                backgroundColor: 'skyblue',
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                label: 'BTC',
                data: [null, 200, 600, 100, 400, 500, 700, 300, 100, 300],
                borderColor: 'turquoise',
                backgroundColor: 'turquoise',
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
            },
            {
                label: 'LTC',
                data: [null, 200, 300, 400, 700, 300, 100],
                borderColor: 'green',
                backgroundColor: 'green',
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor: 'rgba(255, 255, 255, 0.7)',
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    fontColor: 'rgba(255, 255, 255, 0.7)',
                },
            }]
        },
    }
});
