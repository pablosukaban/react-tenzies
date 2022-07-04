import React, { useState } from "react";
import Dice from "./components/Dice";
import Info from "./components/Info";
import "./style.css";

const App = () => {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    return Array(10)
      .fill(null)
      .map((element) => Math.ceil(Math.random() * 6));
  }

  function rerollDice() {
    setDice(() => allNewDice());
  }

  return (
    <div className="container">
      <div className="main">
        <Info />
        <Dice dice={dice} />
        <button onClick={rerollDice} className="button">
          Reroll
        </button>
      </div>
    </div>
  );
};

export default App;
