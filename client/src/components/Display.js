import React, { useState } from 'react';

const Display = ({ balls, strikes, inning, outs }) => {
  return (
    <div>
      <p>Inning: {inning}</p>
      <p>Balls: {balls}</p>
      <p>Strikes: {strikes}</p>
      <p>Outs: {outs}</p>
    </div>
  );
};

export default Display;
