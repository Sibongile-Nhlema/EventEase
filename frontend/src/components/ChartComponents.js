// src/components/ChartComponents.js

import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  PointElement,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  PointElement,
  Filler
);

// Sample data for Bar Chart
export const BarChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};

// Sample data for Line Chart
export const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};

// Sample data for Pie Chart
export const PieChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};
