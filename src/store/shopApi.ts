import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants';
import { ProductI } from '../service/Api';

interface responseProductsI {
  products: ProductI[];
  total: number;
  skip: number;
  limit: number;
}

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['products', 'product'],
  endpoints: (build) => ({
    fetchProducts: build.query<responseProductsI, string>({
      query: (query: string) => (query === '' ? 'products' : `products/search?q=${query}`),
      providesTags: ['products'],
    }),
    fetchSingleProduct: build.query<ProductI, string>({
      query: (id) => `products/id${id}`,
      providesTags: ['product'],
    }),
  }),
});

export const { useFetchProductsQuery, useFetchSingleProductQuery } = shopApi;
