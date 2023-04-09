import React from 'react';
import './CardsWrapper.scss';
import Card, { CardProps } from '../Card';

export type CardsWrapperProps = {
  collection: CardProps[];
};
const CardsWrapper = ({ collection }: CardsWrapperProps) => {
  const renderCards =
    collection &&
    collection.map((card) => {
      const { title, category, description, price, onClick = () => {}, thumbnail, id } = card;

      return (
        <Card
          key={id}
          thumbnail={thumbnail}
          title={title}
          description={description}
          price={price}
          onClick={onClick}
          category={category}
        />
      );
    });
  return (
    <div className="cards">
      <h2 className="cards-title">Total Product</h2>
      {collection && <div className="cards-wrapper">{renderCards}</div>};
    </div>
  );
};

export default CardsWrapper;
