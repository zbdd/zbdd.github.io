import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link', () => {
  render(<App />);
  const linkElement = screen.getByText(/join us/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', 'https://vgw.co/careers')
});
