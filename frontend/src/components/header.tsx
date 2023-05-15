import React from 'react';
import CSVReader from './csvReader';

const Header = () => {
  return (
    <header className="bg-green-500 h-[50px] w-screen text-center flex items-center justify-center rounded-md mb-5">
      <h1 className="text-white ">
        Bem-vindo ao controle de produtos
      </h1>
    </header>
  );
};

export default Header;
