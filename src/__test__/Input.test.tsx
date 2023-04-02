import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from '../components/Input';

describe('Input test', () => {
  it('classname передаются и отображаются', () => {
    const customClass = 'my-class';
    const testId = 'test-input';
    render(<Input value={testId} onChange={() => {}} disabled className={customClass} />);
    const inputElement = screen.getByDisplayValue(testId);
    expect(inputElement).toHaveClass(customClass);
    expect(inputElement).toHaveClass('input_disabled');
  });

  it('Input in the document', () => {
    const testId = 'test-input';
    render(<Input value={testId} onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue(testId);
    expect(inputElement).toBeInTheDocument();
  });
});
