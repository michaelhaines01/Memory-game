import React, { useState, useEffect } from "react";
import Data from "./data.js";

const HandleCards = (props) => {
  const [selectedcards, setselected] = useState([]);
  const Props = props;
  const selectcard = (card) => {
    if (selectedcards.indexOf(card) === -1) {
      setselected(selectedcards.concat(card));
      Props.increasescore();
    } else {
      Props.checkhigh();
      setselected([]);
      Props.reset();
    }
  };

  const shuffle = () => {
    //Dursten shuffle
    for (let i = Data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [Data[i], Data[j]] = [Data[j], Data[i]];
    }
  };

  useEffect(() => {
    shuffle();
  }, [selectedcards]);

  return (
    <div className="card-grid">
      {Data.map((card) => (
        <div className="card" key={card.id}>
          <div className="img-grid">
            <img
              onClick={() => {
                selectcard(card);
              }}
              height="180"
              src={card.img}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HandleCards;
