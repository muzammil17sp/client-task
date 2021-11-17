import React from "react"
import ReactApexChart from "react-apexcharts"
import './ApexChart.css'
const LineChart = () => {
  const series = [
    {
      name: "TVL",
      data: [12,14.5,10,9,10,11],
    },
    {
        name: "Adjusted TVL",
        data: [13,11.5,8,11,10,14],
      },

  ]

var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#C400FF", "#FF9300"],
    series : [
        {
          name: "TVL",
          data: [12,14.5,10,9,10,11],
        },
        {
            name: "Adjusted TVL",
            data: [13,11.5,8,11,10,14],
          },
    
      ],
    stroke: {
      width: [4, 4],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
        categories: [
                    "19 Sep",
                    "24 Sep",
                    "29 Sep",
                    "04 Oct",
                    "09 Oct",
                    "14 Oct",
                     ],
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
        //   color: "#FF1654"
        },
        labels: {
          style: {
            // colors: "#FF1654"
          }
        },
       
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
       
        },
        labels: {
          style: {
            // colors: "#247BA0"
          }
        },
       
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "right",
      offsetX: 40
    },
    title: {
        text: 'HISTORICAL ACTIVITY',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },}
  };
  
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height="280"
    />
  )
}

export default LineChart
