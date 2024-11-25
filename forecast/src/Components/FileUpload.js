import React from 'react';
import Papa from 'papaparse';

const FileUpload = ({ setRawData, setProductList }) => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log('Parsed Data:', result.data); // Log parsed data for debugging
            const data = result.data;
      
            // Check for product_description column
            if (data.length > 0 && data[0].product_description) {
              const products = Array.from(new Set(data.map((row) => row.product_description?.trim()))).filter(Boolean);
              console.log('Extracted Products:', products); // Log extracted products
              setRawData(data);
              setProductList(products);
            } else {
              console.error('Error: Missing "product_description" column in CSV.');
              alert('CSV file must contain a "product_description" column.');
            }
          },
        });
  };

  return (
    <div>
      <h3>Upload Sales Data</h3>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
