import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from '../pages/AboutUs/AboutUs';

describe('AboutUs', () => {
  it('AboutUs render', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Us');
  });
});
