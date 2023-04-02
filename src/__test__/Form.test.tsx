import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import { FormInputs } from '../components/CardPersonal';

const addFormData = (data: FormInputs) => {};

describe('Form component', () => {
  it('renders all form fields and submit button', () => {
    const { getByPlaceholderText, getByText } = render(<Form addFormData={addFormData} />);
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByText('subscribe')).toBeInTheDocument();
    expect(getByText('Male')).toBeInTheDocument();
    expect(getByText('female')).toBeInTheDocument();
    expect(getByText('Москва')).toBeInTheDocument();
    expect(getByText('submit')).toBeInTheDocument();
  });
});
