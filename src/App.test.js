import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //push a ver si sale
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
