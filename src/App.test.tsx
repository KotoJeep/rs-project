import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render App', () => {
    render(<App />);
    expect(screen.getByTestId('header-test')).toBeInTheDocument();
  });
});
