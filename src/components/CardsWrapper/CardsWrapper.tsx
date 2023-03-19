import React, { FC } from 'react';
import './CardsWrapper.scss';
import Card, { CardProps } from '../Card';

export type CardsWrapperProps = {
  collection: CardProps[];
};
const CardsWrapper = ({ collection }: CardsWrapperProps) => {
  const renderCards = collection.map((card, idx) => {
    const { title, category = '', description, price, onClick = () => {}, image } = card;

    return (
      <Card
        key={idx}
        image={image}
        title={title}
        description={description}
        price={price}
        onClick={onClick}
        category={category}
      />
    );
  });
  console.log(collection);
  return (
    <div className="cards">
      <h2 className="cards-title">Total Product</h2>
      <div className="cards-wrapper">{renderCards}</div>;
    </div>
  );
};

export default CardsWrapper;
