import { typeRegisterSchema } from '@/schemasZod';

const productsURL = 'http://localhost:3001/products';


export async function getProducts(): Promise<any>{
  const res = await fetch(productsURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

   });
  
   const data = await res.json();
  return data  

  }


export async function getProductByCode(code: any): Promise<any>{
  const res = await fetch(`${productsURL}/${code}`, {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
  },
  });
  const data = await res.json();
  
  return data  
}

export async function registerProduct(body: any): Promise<any>{
  const res = await fetch(productsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(body)
    });
    
  const data = await res.json();
  return data  
}

export async function editProduct(body: any, code: any): Promise<any>{
  const res = await fetch(`${productsURL}/${code}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(body)
    });
    
  const data = await res.json();
  return data  
}

export async function editProductsByCSV(body: any): Promise<any>{
  const res = await fetch(`${productsURL}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(body)
    });
    
  const data = await res.json();
  return data  
}

