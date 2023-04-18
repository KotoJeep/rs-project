import React from 'react';
import { render } from '@testing-library/react';
import Form from '../components/Form';
import store from '../store/store';
import { Provider } from 'react-redux';

describe('Form component', () => {
  it('renders all form fields and submit button', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(getByPlaceholderText('Name')).toBeInTheDocument();
    expect(getByText('subscribe')).toBeInTheDocument();
    expect(getByText('Male')).toBeInTheDocument();
    expect(getByText('female')).toBeInTheDocument();
    expect(getByText('Москва')).toBeInTheDocument();
    expect(getByText('submit')).toBeInTheDocument();
  });
});
