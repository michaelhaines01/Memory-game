import React from "react";
import "../App.css";

const Start = (props) => {
  const Props = props;

  return (
    <div className="img-grid">
      <div className="messagecard">
        <div>
          <h4>Test your memory dont select the same coin twice.</h4>
        </div>
        <button onClick={() => Props.toggledisplay()}> Start Game</button>
      </div>
    </div>
  );
};
export default Start;
