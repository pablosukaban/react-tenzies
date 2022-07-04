import React, { useState } from "react";
import Die from "./Die";
const Dice = (props) => {
  return (
    <div className="dice">
      {/* <Die value={1} /> */}
      {props.dice.map((die, index) => (
        <Die value={die} key={index} />
      ))}
    </div>
  );
};

export default Dice;
