import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe('<Display />', () => {
  it('displays the count of balls and strikes for the at-bat.', () => {
    const { getByText } = render(<Display balls={2} strikes={1} />);
    getByText('Balls: 2');
    getByText('Strikes: 1');
  });
});
