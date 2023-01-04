import { render, screen } from '@testing-library/react';
import WelcomeComponent from './welcome';

test('check explore button', () => {
  render(<WelcomeComponent />);
  const Button = screen.getByText('EXPLORE');
  expect(Button).toBeInTheDocument();
});
