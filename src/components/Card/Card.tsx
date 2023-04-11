import React, { MouseEventHandler } from 'react';
import './Card.scss';
import { ProductI } from '../../service/Api';

export interface CardProps extends ProductI {
  onClick?: MouseEventHandler;
}

const Card = (data: Omit<CardProps, 'id'>) => {
  const { thumbnail, title, category, price, onClick } = data;
  return (
    <div className="card" onClick={onClick}>
      <img src={thumbnail} className="card__img" />
      <div className="card__wrapper">
        <h5 className="card__category">{category}</h5>
        <h3 className="card__title">{title}</h3>
        <h3 className="card__price">${price}</h3>
      </div>
    </div>
  );
};

export default Card;
