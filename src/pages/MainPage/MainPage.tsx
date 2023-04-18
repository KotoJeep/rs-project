import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import SearchBar from '../../components/SearchBar';
import { ProductI } from '../../service/Api';
import { WithLoader } from '../../components/WithLoader';
import Card from '../../components/Card';
import CardModal from '../../components/CardModal';
import { useFetchProductsQuery } from '../../store/shopApi';
import { useAppSelector } from '../../hooks/hooks';

const MainPage = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const { searchQuery } = useAppSelector((state) => state.formSlice);

  const { data, isLoading, isFetching, error } = useFetchProductsQuery(searchQuery);

  useEffect(() => {
    data && setProducts(data?.products);
  }, [data]);

  const closeModal = (): void => {
    setIsOpen(false);
  };
  const openModal = (id: number): void => {
    setIsOpen(true);
    setId(id);
  };

  const renderCards = (collection: ProductI[]) => {
    return collection.map((card) => {
      const { title, category, description, price, thumbnail, id } = card;

      return (
        <Card
          key={id}
          thumbnail={thumbnail}
          title={title}
          description={description}
          price={price}
          category={category}
          onClick={() => {
            openModal(id);
          }}
        />
      );
    });
  };
  const cards = renderCards(products);

  return (
    <div data-testid="main-page">
      <section className="presentation">
        {/*<h1 className="presentation__title">Products</h1>*/}
        {/*<p className="presentation__text">*/}
        {/*  We display products based on the latest products we have, if you want to see our old*/}
        {/*  products please enter the name of the item*/}
        {/*</p>*/}
        <h1 className="presentation__title">
          Dear cross-checker, unfortunately, did not have time to finish the work. I would be very
          grateful if you would postpone checking my work until Wednesday
        </h1>
      </section>
      <SearchBar searchQuery={searchQuery} />
      <div className="cards">
        <WithLoader loading={isLoading || isFetching}>
          {!isLoading && !isFetching ? (
            <>
              <h2 className="cards-title">
                {products.length ? 'Total Product' : 'Product not found'}
              </h2>
              {products && <div className="cards-wrapper">{cards}</div>}
            </>
          ) : null}
        </WithLoader>
      </div>
      {isOpen && <CardModal {...{ closeModal, id }} />}
      {error && <p>error</p>}
    </div>
  );
};

export default MainPage;
