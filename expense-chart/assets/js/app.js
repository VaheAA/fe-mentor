fetch('../../files/data.json')
  .then((response) => response.json())
  .then((data) => {
    const options = {
      chart: {
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      markers: {
        size: 0
      },
      grid: {
        show: false,
        padding: {
          left: -10
        }
      },
      series: [
        {
          name: '$',
          data: data.map((item) => item.amount)
        }
      ],
      fill: {
        colors: [
          function ({ value, seriesIndex, w }) {
            if (value >= Math.max(...data.map((item) => item.amount))) {
              return '#76b5bc';
            } else {
              return '#ec775f';
            }
          }
        ]
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 7,
          dataLabels: {
            enabled: false
          },
          columnWidth: '90%',
          barHeight: '90%',
          distributed: false
        }
      },
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      xaxis: {
        day: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        show: false
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const data =
            w.globals.initialSeries[seriesIndex].data[dataPointIndex];

          return `<span class="tooltip">$${data}</span>`;
        }
      }
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();
  })
  .catch((error) => console.log(error));
