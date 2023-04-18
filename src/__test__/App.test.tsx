import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import store from '../store/store';
import { Provider } from 'react-redux';

test('renders MainPage component', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const mainPageElement = screen.getByTestId('main-page');
  expect(mainPageElement).toBeInTheDocument();
});

test('renders FormPage component', () => {
  render(
    <MemoryRouter initialEntries={['/form']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const formPageElement = screen.getByTestId('form-page');
  expect(formPageElement).toBeInTheDocument();
});

test('renders AboutUs component', () => {
  render(
    <MemoryRouter initialEntries={['/about-us']}>
      <App />
    </MemoryRouter>
  );
  const aboutUsElement = screen.getByTestId('about-us');
  expect(aboutUsElement).toBeInTheDocument();
});

test('renders PageNotFound component', () => {
  render(
    <MemoryRouter initialEntries={['/random-url']}>
      <App />
    </MemoryRouter>
  );
  const pageNotFoundElement = screen.getByTestId('page-not-found');
  expect(pageNotFoundElement).toBeInTheDocument();
});
