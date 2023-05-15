
import { editSchemas, typeEditSchema, typeProductSchemaWithUnderline } from '@/schemasZod';
import { editProduct, getProductByCode, registerProduct } from '../services/request'
import { useEffect, useRef, useState, } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


export default function ModalEditar({ code, onClose, onUpdate }: any) {
  const [productToEdit, setProductToEdit] = useState<typeProductSchemaWithUnderline>();
  const [ initialCost, setInitialCost] = useState<number | null>(null);
  const [ initialSale, setInitialSale] = useState<number | null >(null);

  const { register, handleSubmit, formState: { errors } } = useForm<typeEditSchema>({
    mode: 'all',
    resolver: zodResolver(editSchemas)
  });

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement | any>) => {
    const target = e.target as HTMLButtonElement;
    const closeByBg = target.classList.contains('bg-gray-500');
    if (target.value === 'Fechar' || closeByBg) {
      onClose()
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductByCode(code);
        setProductToEdit(data);
        setInitialCost(data.cost_price)
        setInitialSale(data.sales_price)
      } catch (error) {
        console.error('Erro ao obter dados do produto:', error);
      }
    };
    fetchData();
  }, [code]);

  const handleClose = () => {
    onClose()
  }

  const validation = (value: number, initial: number) => {
    const upperLimit = initial * 1.1;
    const lowerLimit = initial * 0.9;
    if (value > upperLimit || value < lowerLimit) {
      throw new Error('O valor não pode ser maior nem menor do que 10% do inicial');
    }
  };
  
  const handleInputChange = (field: string, value: number | string) => {
    setProductToEdit((prevProduct: any) => ({
      ...prevProduct,
      [field]: value,
    }));
  };
  
  const handleEdit = async () => {
    try {
      validation(Number(productToEdit?.sales_price), Number(initialSale));
      validation(Number(productToEdit?.cost_price), Number(initialCost));
      await editProduct(productToEdit, code);
      onUpdate(productToEdit);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div
      className="z-10 fixed top-50 inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
      onClick={handleCloseClick}
    >
      <div className="z-10 bg-white text-black w-[500px] h-4/6 rounded-lg text-center flex flex-col items-center">
        <p className="text-lg font-bold mb-4 w-full bg-green-100">{`Editar Produto`}</p>
        {productToEdit && (
          <form onSubmit={handleSubmit(handleEdit)}>
            <div>
              <label htmlFor="code">Codigo do produto</label>
              <input
               className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
                {...register('code')}
                type="text"
                id="code"
                placeholder="Code"
                value={productToEdit.code}
                onChange={(e) => handleInputChange('code', e.target.value)}
              />
              {errors?.code?.message && (
                <p className='text-green-500 mt-1 ml-3 '>{errors.code.message}</p>
              )}
           </div>
           <div>
            <label htmlFor="name">Nome do produto</label>
            <textarea
             className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
              {...register('name')}
              id="name"
              placeholder="Name"
              value={productToEdit.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            {errors?.name?.message && (
              <p className='text-green-500 mt-1 ml-3 '>{errors.name.message}</p>
            )}
           </div>
           <div>
            <label htmlFor="costPrice">Preço de compra</label>
            <input
             className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
              {...register('costPrice')}
              type="number"
              id="costPrice"
              placeholder="Code Price"
              value={productToEdit.cost_price}
              onChange={(e) => handleInputChange('cost_price', e.target.value)}
            />
            {errors?.costPrice?.message && (
              <p className='text-green-500 mt-1 ml-3 '>{errors.costPrice.message}</p>
            )}
           </div>
           <div>
            <label htmlFor="salesPrice">Preço de venda</label>
            <input
             className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
              {...register('salesPrice')}
              type="number"
              id="salesPrice"
              placeholder="Sales Price"
              value={productToEdit.sales_price}
              onChange={(e) => handleInputChange('sales_price', e.target.value)}
            />
            {errors?.salesPrice?.message && (
              <p className='text-green-500 mt-1 ml-3 '>{errors.salesPrice.message}</p>
            )}
           </div>
           <button type="submit" className="mt-4 mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[100px]">
             Editar
           </button>
           <button type="button" onClick={handleClose} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[100px]">
             Fechar
           </button>
          <div className='flex flex-col mt-10'>
           <small>OBS1: O valor do preço de compra e o preço de venda não pode ser 10% a mais nem a menos do que o inicial</small>
           <small>OBS2: O valor de venda sempre tera que ser maior que o de compra</small>
          </div>
          </form>
        )}
      </div>
    </div>
  );
}

