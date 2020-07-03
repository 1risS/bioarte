import React from 'react';
import { render } from '@testing-library/react';
import Portada from './Portada';

test('renders learn react link', () => {
  const { getByText } = render(<Portada />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
