import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders chat bot header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/chat bot/i);
  expect(linkElement).toBeInTheDocument();
}); 