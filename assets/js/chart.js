
var ctx = document.getElementById("myLineChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "This Month",
        tension: 0,
        fill: false,
        data: [
          0,
          20,
          11,
          28,
          22,
          39,
          11,
          48,
          40,
          32,
          36,
          23,
          38,
          33,
          39,
          31,
          23,
          39,
          31,
        ],

        borderColor: ["rgba(0,241,255,0.5)"],
        borderWidth: 7,
      },
      {
        label: "Last Month",
        fill: false,
        tension: 0,
        data: [10, 28, 3, 38, 22, 38, 11, 28, 22, 48, 12, 27, 12, 40],
        borderColor: ["rgba(255,184,198, 0.8)"],
        borderWidth: 7,
      },
    ],
  },
  options: {
    legend: {
      labels: {
        usePointStyle: true,
      },
      position: "bottom",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});