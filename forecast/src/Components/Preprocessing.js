import React from 'react';

const Preprocessing = ({ rawData, selectedProduct, setProcessedData }) => {
  const preprocessData = () => {
    const filteredData = rawData.filter(
      (row) => row.product_description === selectedProduct
    );

    const processedData = filteredData.map((row) => ({
      sales_date: new Date(row.sales_date).getMonth() + 1,
      quantity_sold: parseFloat(row.quantity_sold),
    }));

    // Normalize quantity_sold
    const maxQuantity = Math.max(...processedData.map((d) => d.quantity_sold));
    processedData.forEach((d) => (d.quantity_sold /= maxQuantity));

    setProcessedData(processedData);
  };

  return (
    <div>
      <h3>Preprocess Data for: {selectedProduct}</h3>
      <button onClick={preprocessData}>Preprocess</button>
    </div>
  );
};

export default Preprocessing;
