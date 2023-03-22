import React, { MouseEventHandler, ReactNode } from 'react';
import './Card.scss';

export type CardProps = {
  image: string;
  category?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  price: ReactNode;
  onClick?: MouseEventHandler;
};

const Card = ({ image, title, category, description, price, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} className="card__img" />
      <div className="card__wrapper">
        <h5 className="card__category">{category}</h5>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <h3 className="card__price">${price}</h3>
      </div>
    </div>
  );
};

export default Card;
