import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "CLIENT A",
    profit: 4000,
    loss: 2400,
    amt: 2400
  },
  {
    name: "CLIENT B",
    profit: 3000,
    loss: 1398,
    amt: 2210
  },
  {
    name: "CLIENT C",
    profit: 2000,
    loss: 9800,
    amt: 2290
  },
  {
    name: "CLIENT D",
    profit: 2780,
    loss: 3908,
    amt: 2000
  },
  {
    name: "CLIENT E",
    profit: 1890,
    loss: 4800,
    amt: 2181
  },
  {
    name: "CLIENT F",
    profit: 2390,
    loss: 3800,
    amt: 2500
  },
  {
    name: "CLIENT G",
    profit: 3490,
    loss: 4300,
    amt: 2100
  }
];
const BarChart = ({ isDashboard = false }) => {
export default function Chart() {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 4
        }}
        animate={true}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" stackId="a" fill="#ADC5A2" />
        <Bar dataKey="loss" stackId="a" fill="#888CB6" />
        <Bar dataKey="amt" fill="#AB9976" />
      </BarChart>
    </ResponsiveContainer>
  );
}
