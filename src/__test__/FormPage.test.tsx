import FormPage from '../pages/FormPage/FormPage';
import { render, screen } from '@testing-library/react';

describe('FormPage', () => {
  it('should render the Form and CardPersonal components', () => {
    render(<FormPage />);

    expect(screen.getByTestId('form-page')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
