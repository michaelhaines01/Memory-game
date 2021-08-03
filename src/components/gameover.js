import React from "react";
import "../App.css";
const Gameover = (props) => {
  const Props = props;

  return (
    <div className="img-grid">
      <div className="messagecard">
        <h2>Gameover</h2>
        <h2>Score {Props.score} </h2>
        <button onClick={() => Props.toggledisplay()}> Restart</button>
      </div>
    </div>
  );
};

export default Gameover;
