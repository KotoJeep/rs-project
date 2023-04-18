import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { Provider } from 'react-redux';
import store from '../store/store';
import { describe, it } from 'vitest';

describe('SearchBar', () => {
  it('should render the input and button elements', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchBar searchQuery="test" />
      </Provider>
    );
    expect(getByPlaceholderText('Search property')).toBeInTheDocument();
    expect(getByText('Find Now')).toBeInTheDocument();
  });

  it('should update the input value when user types in the input field', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar searchQuery="test" />
      </Provider>
    );
    const input = getByPlaceholderText('Search property');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });
  // it('should save the input value to local storage when user types in the input field', () => {
  //   const mockDispatch = vi.fn();
  //   vi.mock('redux', () => ({
  //     ...vi.requireActual('redux'),
  //     useDispatch: () => mockDispatch,
  //   }));
  //   const { getByPlaceholderText, getByRole } = render(
  //     <Provider store={store}>
  //       <SearchBar searchQuery="test" />
  //     </Provider>
  //   );
  //   const input = getByPlaceholderText('Search property');
  //   const button = getByRole('button', { name: 'Find Now' });
  //   fireEvent.change(input, { target: { value: 'new test' } });
  //   fireEvent.click(button);
  //   expect(mockDispatch).toHaveBeenCalledWith(setSearchQuery('new test'));
  // });
});
