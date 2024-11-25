import React from 'react';

const ProductSelector = ({ productList, selectedProduct, setSelectedProduct }) => {
  return (
    <div>
      <h3>Select Product</h3>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="" disabled>Select a product</option>
        {productList.map((product, index) => (
          <option key={index} value={product}>{product}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductSelector;
