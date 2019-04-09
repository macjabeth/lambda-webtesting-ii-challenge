import React, { useState } from 'react';

import Display from './Display';

const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [inning, setInning] = useState(0);
  const [outs, setOuts] = useState(0);
  const [runs, setRuns] = useState(0);

  const handleBall = () => {
    const nextValue = balls + 1;
    Boolean(nextValue === 4)
      ? handleOut()
      : setBalls(nextValue);
  }

  const handleStrike = () => {
    const nextValue = strikes + 1;
    Boolean(nextValue === 3)
      ? handleOut()
      : setStrikes(nextValue);
  }

  const handleFoul = () => {
    if (strikes < 2) setStrikes(strikes + 1);
  }

  const handleInning = () => {
    const nextValue = inning + 1;
    Boolean(nextValue === 10)
      ? gameOver()
      : setInning(nextValue);
  }

  const handleOut = () => {
    resetBatter();
    const nextValue = outs + 1;
    Boolean(nextValue === 3)
      ? handleInning()
      : setOuts(nextValue);
  }

  const resetBatter = () => {
    setBalls(0);
    setStrikes(0);
  }

  const gameOver = () => {
    setBalls(0);
    setStrikes(0);
    setInning(0);
    setOuts(0);
    setRuns(0);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Controls</h2>
        <button onClick={handleStrike}>strike</button>
        <button onClick={handleBall}>ball</button>
        <button onClick={handleFoul}>foul</button>
        <button onClick={resetBatter}>hit</button>
      </section>
      <section>
        <h2>Score</h2>
        <Display balls={balls} strikes={strikes} inning={inning} outs={outs} />
      </section>
    </div>
  );
};

export default Dashboard;
