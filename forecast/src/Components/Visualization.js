import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Visualization = ({ forecastResults }) => {
  return (
    <div>
      <h3>Sales Forecast</h3>
      <LineChart width={600} height={300} data={forecastResults}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sales_date" label={{ value: 'Month', position: 'insideBottom' }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="predicted_quantity" stroke="#8884d8" name="Predicted" />
      </LineChart>
    </div>
  );
};

export default Visualization;
