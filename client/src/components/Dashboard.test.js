import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('resets balls and strikes to 0 when a player reaches 3 strikes', async() => {
    const { getByText } = render(<Dashboard />);

    await waitForElement(() => getByText('Strikes: 0'));

    const button = await waitForElement(() => getByText('strike'));

    fireEvent.click(button); await waitForElement(() => getByText('Strikes: 1'));
    fireEvent.click(button); await waitForElement(() => getByText('Strikes: 2'));
    fireEvent.click(button); await waitForElement(() => getByText('Strikes: 0'));
  });

  it('resets balls and strikes to 0 when a player reaches 4 balls', () => {
    const { getByText } = render(<Dashboard />);

    getByText('Balls: 0');

    const button = getByText('ball');

    fireEvent.click(button); getByText('Balls: 1');
    fireEvent.click(button); getByText('Balls: 2');
    fireEvent.click(button); getByText('Balls: 3');
    fireEvent.click(button); getByText('Balls: 0');
  });

  it('resets balls and strikes to 0 when a hit is recorded', () => {
    const { getByText } = render(<Dashboard />);

    getByText('Balls: 0');
    getByText('Strikes: 0');

    const hitBtn = getByText('hit');
    const strikeBtn = getByText('strike');
    const ballBtn = getByText('ball');

    fireEvent.click(ballBtn); getByText('Balls: 1');
    fireEvent.click(strikeBtn); getByText('Strikes: 1');

    fireEvent.click(hitBtn);

    getByText('Balls: 0');
    getByText('Strikes: 0');
  });
});
