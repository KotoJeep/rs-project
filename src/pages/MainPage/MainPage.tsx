import React, { useEffect, useState } from 'react';
import './MainPage.scss';

import SearchBar from '../../components/SearchBar';

import { ProductI, responseProductsI } from '../../service/Api';
import CardsWrapper from '../../components/CardsWrapper';
import useApi from '../../hooks/useApi';

const MainPage = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const { data, error, isLoading } = useApi<responseProductsI>();

  useEffect(() => {
    data && setProducts(data?.products);
  }, [data]);

  return (
    <div data-testid="main-page">
      <section className="presentation">
        <h1 className="presentation__title">Products</h1>
        <p className="presentation__text">
          We display products based on the latest products we have, if you want to see our old
          products please enter the name of the item
        </p>
      </section>
      <SearchBar />
      <CardsWrapper collection={products} />
      {isLoading && 'Loading'}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MainPage;
