import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

describe('Not Found Page', () => {
  it('PageNotFound render', () => {
    render(<PageNotFound />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('PageNotFound');
  });
});
