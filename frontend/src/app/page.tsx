'use client'
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Header from '@/components/header';
import ModalRegister from '@/components/modaRegister';
import Products from '@/components/products';
import CSVReader from '@/components/csvReader';


export default function Home() {
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  const handleModalClose = () => {
    setIsRegister(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify">
      <Header />
      <div>
        <CSVReader />
      </div>
      <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" value="Registrar Produto" onClick={handleRegister} />
      {isRegister && <ModalRegister onClose={handleModalClose} />}
      <Products />
    </main>
  );
}
