import React from "react";

const Scoreboard = (props) => {
  const score = props;

  return (
    <div>
      <h2>Score {score.score}</h2>
      <h2>High score {score.high}</h2>
    </div>
  );
};

export default Scoreboard;
