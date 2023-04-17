import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { baseUrl, constUrl } from '../constants';
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
  tagTypes: ['products'],
  endpoints: (build) => ({
    fetchProducts: build.query<responseProductsI, string>({
      query: (query) => (query === '' ? constUrl.PRODUCTS : `products/search?q=${query}`),
      providesTags: ['products'],
    }),
  }),
});

export const { useFetchProductsQuery } = shopApi;
