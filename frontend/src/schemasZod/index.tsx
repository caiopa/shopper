import { getProductByCode } from '@/services/request';
import { z } from 'zod';

/* Register Schema */
export const registerSchema = z
  .object({
    code: z
      .string()
      .min(1, 'Escolha um código válido')
      .refine(async (code) => {
        const codeExists = await getProductByCode(code);
        return !codeExists;
      }, 'O código já existe no banco de dados'),
    name: z.string().min(3, 'Insira um nome com mais de 3 letras'),
    costPrice: z.string().min(1, 'Insira um valor de compra'),
    salesPrice: z.string().min(1, 'Insira um valor de venda'),
  })
  .refine((data) => {
    const costPrice = parseFloat(data.costPrice);
    const salesPrice = parseFloat(data.salesPrice);
    return costPrice < salesPrice;
  }, {
    message: 'O valor de venda deve ser maior que o valor de compra',
    path: ['salesPrice'],
  });

export type typeRegisterSchema = z.infer<typeof registerSchema>;

/* Edit Schema */
export const editSchemas = z
  .object({
    code: z
      .string()
      .min(1, 'Escolha um código válido'),
    name: z.string().min(3, 'Insira um nome com mais de 3 letras'),
    costPrice: z.string().min(1, 'Insira um valor de compra'),
    salesPrice: z.string().min(1, 'Insira um valor de venda'),
  })
  .refine((data) => {
    const costPrice = parseFloat(data.costPrice);
    const salesPrice = parseFloat(data.salesPrice);
    return costPrice < salesPrice;
  }, {
    message: 'O valor de venda deve ser maior que o valor de compra',
    path: ['salesPrice'],
  });

export type typeEditSchema = z.infer<typeof registerSchema>;

/* Product schema */
export const typeProductSchemaWithUnderline = z
  .object({
    code: z.string(),
    name: z.string(),
    costPrice: z.string().optional(),
    salesPrice: z.string().optional(),

  })

export type typeProductSchemaWithUnderline = z.infer<typeof productSchema>;

export const productSchema = z
  .object({
    code: z.string(),
    name: z.string(),
    cost_price: z.string().optional(),
    sales_price: z.string().optional(),
  })

export type typeProductSchema = z.infer<typeof productSchema>;