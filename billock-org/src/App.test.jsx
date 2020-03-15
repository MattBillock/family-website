import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Billock Family/i);
  expect(linkElement).toBeInTheDocument();
});

