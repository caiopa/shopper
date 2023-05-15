import { useState } from 'react';
import ModalEditar from '@/components/modalEditar';
import { typeProductSchema } from '@/schemasZod';

export default function ProductsCards(product: typeProductSchema) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleEditClick = async () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleProductUpdate = (updatedValues: typeProductSchema) => {
    setUpdatedProduct({ ...updatedProduct, ...updatedValues });
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-screen p-4 mb-4">
     <p className="text-lg font-bold">Code: {product.code}</p>
      <p className="mb-2">Name: {product.name}</p>
      <p className="mb-2">Valor de compra: {Number(product.cost_price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p className="mb-2">Valor de venda: {Number(product.sales_price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

      <button onClick={handleEditClick} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[100px]">Editar</button>
      {
        isModalOpen && (
          <ModalEditar
            code={product.code}
            onClose={handleEditClick}
            onUpdate={handleProductUpdate}
          />
        )
      }
    </div>
  );
}





