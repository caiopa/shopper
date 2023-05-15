'use client'
import { useEffect, useState } from 'react';
import ProductsCards from './productsCard';
import { typeProductSchema } from '@/schemasZod';
import { getProducts } from '@/services/request';

export default function Products() {
  const [ prod, setProd ] = useState<typeProductSchema[]>([])
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const products = await getProducts(); 
        setProd(products);
      } catch (error) {
        console.error('Erro ao obter os dados dos produtos:', error);
      }
    };
    fetchProductsData();
  }, [])

  return (
    <>
      <h1 className="text-4xl font-bold my-4">Produtos</h1>
      {
        prod.length > 1 && prod.map((product: typeProductSchema, i: number) => <ProductsCards key={i} {...product} />)
      }
    </>
   )
}

  