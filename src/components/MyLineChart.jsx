import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  { dia: "2019-08-24T00:00:00.000", planta: "Noche Buena", valor: 1.5 },
  { dia: "2019-08-25T00:00:00.000", planta: "Noche Buena", valor: 3.5 }, 
  { dia: "2019-08-26T00:00:00.000", planta: "Noche Buena", valor: 5.5 }, 
  { dia: "2019-08-27T00:00:00.000", planta: "Noche Buena", valor: 7.5 }, 
  { dia: "2019-08-28T00:00:00.000", planta: "Noche Buena", valor: 9.5 }
]

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
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  </>
);

export default MyLineChart;