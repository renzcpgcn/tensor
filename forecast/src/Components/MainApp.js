import React, { useState } from 'react';
import FileUpload from './FileUpload';
import ProductSelector from './ProductSelector';
import Preprocessing from './Preprocessing';
import TrainModel from './TrainModel';
import Forecasting from './Forecasting';
import Visualization from './Visualization';

const MainApp = () => {
  const [rawData, setRawData] = useState(null); // CSV data
  const [productList, setProductList] = useState([]); // Extracted product names
  const [selectedProduct, setSelectedProduct] = useState(''); // Current product
  const [processedData, setProcessedData] = useState(null); // Processed data for training
  const [model, setModel] = useState(null); // Trained TensorFlow model
  const [forecastResults, setForecastResults] = useState([]); // Forecasted data

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    // Trigger preprocessing and training automatically
    preprocessAndTrain(product);
  };

  const preprocessAndTrain = (product) => {
    if (!rawData) {
      alert('Please upload a CSV file first.');
      return;
    }

    // Preprocess data
    const filteredData = rawData.filter(
      (row) => row.product_description === product
    );
    const processed = filteredData.map((row) => ({
      sales_date: new Date(row.sales_date).getMonth() + 1,
      quantity_sold: parseFloat(row.quantity_sold),
    }));

    const maxQuantity = Math.max(...processed.map((d) => d.quantity_sold));
    processed.forEach((d) => (d.quantity_sold /= maxQuantity));

    setProcessedData(processed);

    // Train model
    const xs = tf.tensor2d(processed.map((row) => [row.sales_date]));
    const ys = tf.tensor2d(processed.map((row) => [row.quantity_sold]));

    const newModel = tf.sequential();
    newModel.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [1] }));
    newModel.add(tf.layers.dense({ units: 1 }));
    newModel.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

    newModel
      .fit(xs, ys, {
        epochs: 50,
        callbacks: {
          onEpochEnd: (epoch, logs) => {
            console.log(`Epoch ${epoch + 1}: Loss = ${logs.loss}`);
          },
        },
      })
      .then(() => {
        setModel(newModel);
        alert('Model trained successfully!');
      });
  };

  return (
    <div>
      <h1>Sales Forecasting App</h1>
      <FileUpload setRawData={setRawData} setProductList={setProductList} />
      {productList.length > 0 && (
        <ProductSelector
          productList={productList}
          selectedProduct={selectedProduct}
          setSelectedProduct={handleProductSelection}
        />
      )}
      {model && processedData && (
        <Forecasting
          model={model}
          selectedProduct={selectedProduct}
          setForecastResults={setForecastResults}
        />
      )}
      {forecastResults.length > 0 && <Visualization forecastResults={forecastResults} />}
    </div>
  );
};

export default MainApp;