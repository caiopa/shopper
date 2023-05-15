import { editProductsByCSV } from '@/services/request';
import React, { useState } from 'react';

export const CSVReader = () => {
  const [csvProducts, setCsvProducts] = useState<[]>([]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement | any>) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        processCSVData(csvData);
      };
      reader.readAsText(file);
    }
  };
  
  const processCSVData = (csvData: string) => {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    const jsonData = rows.slice(1).map((row: string) => {
      const values = row.split(',');
      return headers.reduce((obj: Record<string, any>, header: string, index: number) => {
        const value = values[index].replace(/\r/g, '').trim();
        if (header === 'code') {
          obj[header] = parseInt(value, 10);
        } else {
          obj[header.replace(/\r/g, '').trim()] = Number(parseFloat(value)).toFixed(2);
        }
        return obj;
      }, {});
    });
  
    setCsvProducts(jsonData as never);
  };
  
  const handleEditCSV = async () => {
    console.log(csvProducts);
    const editProduct = await editProductsByCSV(csvProducts);
    console.log(editProduct);
    return editProduct;
  };

  return (
    <>
    <input
      type="file"
      accept=".csv"
      onChange={handleFileChange}
      className="bg-white border border-gray-300 py-2 px-4 rounded-lg mb-4"
    />
    <button
      type="button"
      onClick={handleEditCSV}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
    >
      Editar por CSV
    </button>
  </>
  
  );
};

export default CSVReader;
