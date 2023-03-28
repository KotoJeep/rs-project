import React, { FC } from 'react';
import './CardPersonal.scss';
export type personalCardProps = {
  name: string;
  date: string;
  gender: string;
  city: string;
  agree: boolean;
  file: string;
};
const CardPersonal: FC<personalCardProps> = ({ name, city, agree, file, gender, date }) => {
  return (
    <div className="card-personal">
      <img src={file} className="card-personal__img" />
      <div className="card-personal__wrapper">
        <h3 className="card-personal__name">{name}</h3>
        <h5 className="card-personal__gender">{gender}</h5>
        <p className="card-personal__date">Birthday {date}</p>
        <p className="card-personal__city">{city}</p>
        <div className="card-personal__agree">{agree ? 'subscribed' : ' unsubscribed'}</div>
      </div>
    </div>
  );
};

export default CardPersonal;
