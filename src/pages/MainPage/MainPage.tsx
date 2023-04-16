import React from 'react';
import './MainPage.scss';

import SearchBar from '../../components/SearchBar';
import { CardProps } from '../../components/Card';
import CardsWrapper from '../../components/CardsWrapper';
const item: CardProps = {
  title: 'Handmade Bronze Salad',
  image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=8863',
  category: 'Shoes',
  description:
    'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  price: 547,
};
export const arrItems: CardProps[] = new Array(9).fill(item);

const MainPage = () => {
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
      <CardsWrapper collection={arrItems} />
    </div>
  );
};

export default MainPage;
