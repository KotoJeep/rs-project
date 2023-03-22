import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

const cardProps = {
  title: 'Handmade Bronze Salad',
  image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=8863',
  category: 'Shoes',
  description:
    'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  price: 547,
};

describe('Card Tests', () => {
  it('пропсы передаются и отображаются', () => {
    render(
      <Card
        image={cardProps.image}
        title={cardProps.title}
        description={cardProps.description}
        price={cardProps.price}
      />
    );

    const title = screen.getByText(cardProps.title);
    const subtitle = screen.getByText(cardProps.title);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
