import ky from 'ky';

const api = ky.create({ prefixUrl: 'https://dummyjson.com/' });

export interface ProductI {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}
// rating: number;
// stock: number;
// brand: string;
// discountPercentage: number;
// images: string[];
export interface responseProductsI {
  products: ProductI[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = async (): Promise<ProductI[]> => {
  try {
    const res = await api.get('products').json<responseProductsI>();
    return res.products;
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
};

export const searchItems = async (query: string): Promise<ProductI[]> => {
  try {
    return await api.get(`products/search?q=${query}`).json<ProductI[]>();
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
};

export const getItem = async (id: string): Promise<ProductI> => {
  try {
    return await api.get(`products/${id}`).json<ProductI>();
  } catch (error) {
    throw new Error('Failed to fetch item.');
  }
};
