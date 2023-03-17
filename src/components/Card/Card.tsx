import React from 'react';

export type CardProps = {
  image: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const Card = (): CardProps => {
  return <div></div>;
};

export default Card;
