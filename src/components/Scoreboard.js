import React from "react";

const Scoreboard = (props) => {
  const score = props;

  return (
    <div className="scoreboard">
      <h3>Score {score.score}</h3>
      <h3>High score {score.high}</h3>
    </div>
  );
};

export default Scoreboard;
