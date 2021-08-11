import "./App.css";
import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard.js";
import HandleCards from "./components/cards.js";

import Gameover from "./components/gameover.js";
import Start from "./components/start.js";
const App = () => {
  const [score, setscore] = useState(0);
  const [high, sethigh] = useState(0);
  const [displaybool, setdisplay] = useState(false);
  const [gameover, setgameover] = useState(false);

  const reset = () => {
    setgameover(true);
    setdisplay(false);
  };
  const increasescore = () => {
    setscore(score + 1);
  };
  const toggledisplay = () => {
    setscore(0);
    setdisplay(true);
    setgameover(false);
  };
  const checkhigh = () => {
    if (score >= high) {
      sethigh(score);
    }
  };

  return (
    <div className="game-container">
      <header>
        <h1 className="title">Memory Game</h1>
        <Scoreboard score={score} high={high} />
      </header>

      {!displaybool && !gameover && <Start toggledisplay={toggledisplay} />}
      {gameover && <Gameover toggledisplay={toggledisplay} score={score} />}

      {displaybool && (
        <HandleCards
          checkhigh={checkhigh}
          setscore={setscore}
          reset={reset}
          increasescore={increasescore}
        />
      )}
    </div>
  );
};

export default App;
