import React, { FC } from 'react';
import './CardModal.scss';
import { WithLoader } from '../WithLoader';
import useApi from '../../hooks/useApi';

type CardModalProps = {
  id: number;
  closeModal: () => void;
};

type Product = {
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
};

const CardModal: FC<CardModalProps> = ({ id, closeModal }) => {
  const { data, error, isLoading } = useApi<Product>(`product/${id}`);

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal">
        <WithLoader loading={isLoading}>
          {data && (
            <div className="modal_content">
              <img src={data.thumbnail} className="modal__img" />
              <div className="card__wrapper">
                <h5 className="card__category">{data.category}</h5>
                <h5>Brand: {data.brand}</h5>
                <h3 className="card__title">{data.title}</h3>
                <p className="card__description">{data.description}</p>
                <p className="card__description"> Rating: {data.rating}/5</p>
                <h3 className="card__price">${data.price}</h3>
              </div>
            </div>
          )}
          {error && <p>{error}</p>}
        </WithLoader>
      </div>
    </div>
  );
};

export default CardModal;
