import { useForm } from 'react-hook-form';
import Button from './Button';
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, typeRegisterSchema } from '@/schemasZod';
import { registerProduct } from '../services/request'

export default function ModalRegister({ onClose }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm<typeRegisterSchema>({
    mode: 'all',
    resolver: zodResolver(registerSchema)
  });

  const handleRegister = async (data: any) => {
    const newProduct = {
      code: data.code,
      name: data.name,
      cost_price: data.costPrice,
      sales_price: data.salesPrice,
    };
    await registerProduct(newProduct)
    onClose()
  }
  
 
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement | any>) => {
    const target = e.target as HTMLButtonElement;
    const closeByBg = target.classList.contains('bg-gray-500');
    if (target.value === "Fechar" || closeByBg) {
      onClose();
    }
  };
  
  return (
    <div className="z-10 fixed top-50 inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center" onClick={handleCloseClick}>
      <div className="z-10 bg-white text-black w-[500px] h-4/6 rounded-lg text-center flex flex-col items-center">
        <p className="text-lg font-bold mb-4 w-full bg-green-100 h-[50px] flex items-center justify-center">
          Cadastrar novo produto
        </p>
        <form onSubmit={handleSubmit(handleRegister)}>
            <input
              className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
              {...register('code')}
              type="number"
              placeholder="Digite o codigo do produto"
              id="number"
            />
             {errors?.code?.message && (
            <p className='text-red-500 mt-1 ml-3 '>{errors.code.message}</p>
          )}
            <input
              className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
              {...register('name')}
              type="text"
              placeholder="Digite seu nome"
              id="name"
            />
              {errors?.name?.message && (
            <p className='text-red-500 mt-1 ml-3 '>{errors.name.message}</p>
          )}
            <input
              className='w-full m-auto block border rounded-md px-3 py-2 mt-2'
              {...register('costPrice')}
              type="number"
              placeholder="Digite o valor de compra"
              id="costPrice"
            />
              {errors?.costPrice?.message && (
                <p className='text-red-500 mt-1 ml-3 '>{errors.costPrice.message}</p>
          )}
            <input
              className='w-full block m-auto border rounded-md px-3 py-2 mt-2'
              {...register('salesPrice')}
              type="number"
              placeholder="Digite o valor de venda"
              id="salesPrice"
            />
            {errors?.salesPrice?.message && (
                <p className='text-red-500 mt-1 ml-3 '>{errors.salesPrice.message}</p>
          )}
            <div>
              <Button type="button" className="mt-4 mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[100px]" onClick={onClose} value="Fechar"/>

              <Button type="submit"className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-[100px]" value="Registrar"
              />
            </div>  
          </form>
      </div>
    </div>
    )
  }
