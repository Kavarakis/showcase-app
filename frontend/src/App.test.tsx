import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

test('render App', () => {
  mockAllIsIntersecting(true);
  render(<App />);
});
