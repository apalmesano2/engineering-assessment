import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the application successfully', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eva's Catering/i);
  expect(linkElement).toBeInTheDocument();
});
