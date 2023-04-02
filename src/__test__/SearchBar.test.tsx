import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('should render the input and button elements', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    expect(getByPlaceholderText('Search property')).toBeInTheDocument();
    expect(getByText('Find Now')).toBeInTheDocument();
  });

  it('should update the input value when user types in the input field', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search property');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });

  it('should save the input value to local storage when user types in the input field', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText('Search property');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(localStorage.getItem('inputValue')).toEqual('new value');
  });
});
