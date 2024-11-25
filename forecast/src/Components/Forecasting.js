import React from 'react';
import * as tf from '@tensorflow/tfjs';

const Forecasting = ({ model, selectedProduct, setForecastResults }) => {
  const forecastSales = async () => {
    const futureMonths = [1, 2, 3, 4, 5, 6]; // Next 6 months
    const futureData = futureMonths.map((month) => [month]);
    const predictions = model.predict(tf.tensor2d(futureData));
    const results = await predictions.array();

    setForecastResults(
      futureMonths.map((month, index) => ({
        sales_date: month,
        predicted_quantity: results[index][0],
      }))
    );
  };

  return (
    <div>
      <h3>Forecast Sales for: {selectedProduct}</h3>
      <button onClick={forecastSales}>Forecast</button>
    </div>
  );
};

export default Forecasting;
