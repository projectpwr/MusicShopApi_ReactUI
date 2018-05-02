import React from 'react';
import Wrapper from './Wrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  () => render(<Wrapper />, div)
});
