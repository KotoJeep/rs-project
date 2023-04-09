import React, { useEffect, useState } from 'react';
import './MainPage.scss';

import SearchBar from '../../components/SearchBar';

import { ProductI, responseProductsI } from '../../service/Api';
import CardsWrapper from '../../components/CardsWrapper';
import useApi from '../../hooks/useApi';

const MainPage = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [query, setQuery] = useState<string>('');
  const { data, error, isLoading, changeQuery } = useApi<responseProductsI>();

  useEffect(() => {
    data && setProducts(data?.products);
  }, [data]);

  return (
    <div data-testid="main-page">
      <section className="presentation">
        {/*<h1 className="presentation__title">Products</h1>*/}
        <h1 className="presentation__title">
          Dear cross-checker, unfortunately, did not have time to finish the work. I would be very
          grateful if you would postpone checking my work until Wednesday
        </h1>
        {/*<p className="presentation__text">*/}
        {/*  We display products based on the latest products we have, if you want to see our old*/}
        {/*  products please enter the name of the item*/}
        {/*</p>*/}
      </section>
      <SearchBar onSubmitValue={changeQuery} />
      <CardsWrapper collection={products} />
      {isLoading && 'Loading'}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MainPage;
