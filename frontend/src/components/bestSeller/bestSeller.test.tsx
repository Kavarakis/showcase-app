import { fireEvent, render, screen } from '@testing-library/react';
import BestSellersComponent from './bestSeller';

test('check if cards are there', () => {
  render(<BestSellersComponent />);
  let text = 'ESPRO COFFEE FRENCH PRESS P16 0';
  let banner = screen.getByText(text);
  expect(banner).toBeInTheDocument();
});
test('check if next page is working', () => {
  render(<BestSellersComponent />);

  let b = screen.getByText('Next');
  fireEvent.click(b);
  let text = 'ESPRO COFFEE FRENCH PRESS P16 1';
  let banner = screen.getByText(text);
  expect(banner).toBeInTheDocument();
});
