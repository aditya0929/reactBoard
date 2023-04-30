import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const GeographyChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Australia/Oceania'],
        labels: {
          style: {
            colors: ['#f00', '#0f0', '#00f', '#f0f', '#ff0', '#0ff'], // Set category colors here
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            color: '#7FFFD4', // Set y-axis label color here
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'cemter',
            colors: ['#333'], // Set data label color here
          },
        },
      },
      colors: ['#7FFFD4'], // Set chart bar color here
    },
    series: [
      {
        name: 'Population (millions)',
        data: [
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
          Math.floor(Math.random() * 1000),
        ],
      },
    ],
  });

  const generateData = () => {
    setChartData({
      options: {
        ...chartData.options,
      },
      series: [
        {
          name: 'Population (millions)',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
        },
      ],
    });
  };

  return (
    <div>
      <h2>Random Geography Chart</h2>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={400} />
      <button onClick={generateData}style={{
    backgroundColor: '#7FFFD4',
    color: '#',
    borderRadius: '8px',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
    marginTop: '20px',
  }} >
  Generate New Data
</button>

    </div>
  );
};

export default GeographyChart;
