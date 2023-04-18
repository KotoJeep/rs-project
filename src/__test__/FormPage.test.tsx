import FormPage from '../pages/FormPage/FormPage';
import { render, screen } from '@testing-library/react';
import store from '../store/store';
import { Provider } from 'react-redux';

describe('FormPage', () => {
  it('should render the Form and CardPersonal components', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    expect(screen.getByTestId('form-page')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
