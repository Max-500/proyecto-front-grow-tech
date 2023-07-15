import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Día 1',
    humedadAmbiente: 40,
    temperaturaAmbiente: 20,
    humedadSuelo: 30,
    temperaturaSuelo: 18,
  },
  {
    name: 'Día 2',
    humedadAmbiente: 45,
    temperaturaAmbiente: 22,
    humedadSuelo: 35,
    temperaturaSuelo: 20,
  },
  {
    name: 'Día 3',
    humedadAmbiente: 50,
    temperaturaAmbiente: 24,
    humedadSuelo: 40,
    temperaturaSuelo: 22,
  },
  {
    name: 'Día 4',
    humedadAmbiente: 55,
    temperaturaAmbiente: 26,
    humedadSuelo: 45,
    temperaturaSuelo: 24,
  },
  {
    name: 'Día 5',
    humedadAmbiente: 60,
    temperaturaAmbiente: 28,
    humedadSuelo: 50,
    temperaturaSuelo: 26
  }
];

const MyLineChart = () => (
  <>
    <div className="grafica-1">
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="humedadAmbiente" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="temperaturaAmbiente" stroke="#82ca9d" />
          <Line type="monotone" dataKey="humedadSuelo" stroke="#FF0000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="temperaturaSuelo" stroke="#0000FF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </>
);

export default MyLineChart;