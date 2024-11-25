import React from 'react';
import * as tf from '@tensorflow/tfjs';

const TrainModel = ({ processedData, setModel }) => {
  const trainModel = async () => {
    // const xs = tf.tensor2d(
    //   processedData.map((row) => [row.sales_date])
    // );
    // const ys = tf.tensor2d(
    //   processedData.map((row) => [row.quantity_sold])
    // );
    const xs = tf.tensor2d(
        processedData.map((row) => [row.sales_date]) // Ensure shape is [N, 1]
      );
      const ys = tf.tensor2d(
        processedData.map((row) => [row.quantity_sold]) // Ensure shape is [N, 1]
      );
      
      console.log('xs shape:', xs.shape); // Log input tensor shape
      console.log('ys shape:', ys.shape); // Log output tensor shape
      

    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 10, activation: 'relu', inputShape: [1] }));
    model.add(tf.layers.dense({ units: 1 }));
    model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

    // await model.fit(xs, ys, { epochs: 50 });
    await model.fit(xs, ys, {
        epochs: 50,
        callbacks: {
          onEpochEnd: (epoch, logs) => {
            console.log(`Epoch ${epoch + 1}: Loss = ${logs.loss}`);
          },
        },
      });
      

    setModel(model);
  };

  return (
    <div>
      <h3>Train Model</h3>
      <button onClick={trainModel}>Train</button>
    </div>
  );
};

export default TrainModel;
