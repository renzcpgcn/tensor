import React, { useState, useEffect } from 'react';
// import './styles/App.css';
import FileUpload from './Components/FileUpload';
import ProductSelector from './Components/ProductSelector';
import Preprocessing from './Components/Preprocessing';
import TrainModel from './Components/TrainModel';
import Forecasting from './Components/Forecasting';
import Visualization from './Components/Visualization';

// const App = () => {
//   const [rawData, setRawData] = useState([]);
//   const [productList, setProductList] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState('');
//   const [processedData, setProcessedData] = useState([]);
//   const [model, setModel] = useState(null);
//   const [forecastResults, setForecastResults] = useState([]);

//   return (
//     <div className="app-container">
//       <h1>Sales Forecasting Application</h1>
//       <FileUpload setRawData={setRawData} setProductList={setProductList} />
//       {productList.length > 0 && (
//         <ProductSelector
//           productList={productList}
//           selectedProduct={selectedProduct}
//           setSelectedProduct={setSelectedProduct}
//         />
//       )}
//       {selectedProduct && (
//         <Preprocessing
//           rawData={rawData}
//           selectedProduct={selectedProduct}
//           setProcessedData={setProcessedData}
//         />
//       )}
//       {processedData.length > 0 && <TrainModel processedData={processedData} setModel={setModel} />}
//       {model && (
//         <Forecasting
//           model={model}
//           selectedProduct={selectedProduct}
//           setForecastResults={setForecastResults}
//         />
//       )}
//       {forecastResults.length > 0 && <Visualization forecastResults={forecastResults} />}
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [rawData, setRawData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [processedData, setProcessedData] = useState([]);
  const [model, setModel] = useState(null);
  const [forecastResults, setForecastResults] = useState([]);

  useEffect(() => {
    console.log('Raw Data Updated:', rawData);
  }, [rawData]);

  useEffect(() => {
    console.log('Product List Updated:', productList);
  }, [productList]);

  useEffect(() => {
    console.log('Selected Product Updated:', selectedProduct);
  }, [selectedProduct]);

  return (
    <div className="app-container">
      <h1>Sales Forecasting Application</h1>
      <FileUpload setRawData={setRawData} setProductList={setProductList} />
      {productList.length > 0 && (
        <ProductSelector
          productList={productList}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {selectedProduct && (
        <Preprocessing
          rawData={rawData}
          selectedProduct={selectedProduct}
          setProcessedData={setProcessedData}
        />
      )}
      {processedData.length > 0 && <TrainModel processedData={processedData} setModel={setModel} />}
      {model && (
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

export default App;

