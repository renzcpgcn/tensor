// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const Visualization = ({ forecastResults }) => {
//   return (
//     <div>
//       <h3>Sales Forecast</h3>
//       <LineChart width={600} height={300} data={forecastResults}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="sales_date" label={{ value: 'Month', position: 'insideBottom' }} />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="predicted_quantity" stroke="#8884d8" name="Predicted" />
//       </LineChart>
//     </div>
//   );
// };

// export default Visualization;

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
  // Map the data into the desired format for the chart
  const chartData = forecastResults.map((result) => ({
    month: `Month ${result.sales_date}`, // x-axis label
    predictedSales: result.predicted_quantity, // Predicted sales
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
