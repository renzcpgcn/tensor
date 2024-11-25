import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Visualization = ({ forecastResults }) => {
  const chartData = forecastResults.map((result) => ({
    month: `Month ${result.sales_date}`, 
    predictedSales: result.predicted_quantity,
  }));

  return (
    <div>
      <h3>Sales Forecast</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom' }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="predictedSales" stroke="#8884d8" name="Predicted Sales" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Visualization;
