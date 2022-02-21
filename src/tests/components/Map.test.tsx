import { render, screen } from '@testing-library/react';
import Map from '../../components/Map';

test('renders the map successfully', () => {
  render(<Map />);
  const linkElement = screen.getByText(/Berkely/i);
  expect(linkElement).toBeInTheDocument();
});
