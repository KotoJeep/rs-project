import { render, screen } from '@testing-library/react';
import CardPersonal from '../components/CardPersonal';

const formInputs = {
  name: 'John Doe',
  date: '01/01/1990',
  gender: 'Male',
  city: 'New York',
  file: 'path/to/image.jpg',
  agree: true,
};

test('renders personal card with correct data', () => {
  render(<CardPersonal {...formInputs} />);

  const name = screen.getByText('John Doe');
  expect(name).toBeInTheDocument();

  const gender = screen.getByText('Male');
  expect(gender).toBeInTheDocument();

  const date = screen.getByText('Birthday 01/01/1990');
  expect(date).toBeInTheDocument();

  const city = screen.getByText('New York');
  expect(city).toBeInTheDocument();

  const agree = screen.getByText('subscribed');
  expect(agree).toBeInTheDocument();
});

test('renders personal card with correct image source', () => {
  render(<CardPersonal {...formInputs} />);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'path/to/image.jpg');
});

test('renders personal card with correct subscription status', () => {
  render(<CardPersonal {...formInputs} agree={false} />);

  const agree = screen.getByText('unsubscribed');
  expect(agree).toBeInTheDocument();
});
