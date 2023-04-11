import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button test', () => {
  it('Children передаются и отображаются', () => {
    render(<Button>Кнопка</Button>);
    expect(screen.getByText('Кнопка')).toBeInTheDocument();
  });

  it('classname передаются и отображаются', () => {
    const customClass = 'my-class';
    render(<Button className={customClass}>Кнопка</Button>);
    expect(screen.getByText('Кнопка')).toHaveClass(customClass);
  });
});
