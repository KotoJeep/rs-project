import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsWrapper from '../components/CardsWrapper';
import { arrItems } from '../pages/MainPage/MainPage';

describe('CardsWrapper test', () => {
  it('CardsWrapper присутствует на сранице', () => {
    render(<CardsWrapper collection={arrItems} />);
    expect(screen.getByText('Total Product')).toBeInTheDocument();
  });
});
