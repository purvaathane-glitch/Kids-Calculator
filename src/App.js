import React, { useState } from "react";
import "./App.css";

import sound0 from "./audio/0.mp3";
import sound1 from "./audio/1.mp3";
import sound2 from "./audio/2.mp3";
import sound3 from "./audio/3.mp3";
import sound4 from "./audio/4.mp3";
import sound5 from "./audio/5.mp3";
import sound6 from "./audio/6.mp3";
import sound7 from "./audio/7.mp3";
import sound8 from "./audio/8.mp3";
import sound9 from "./audio/9.mp3";

import plusSound from "./audio/plus.mp3";
import minusSound from "./audio/sub.mp3";
import multiplySound from "./audio/mul.mp3";
import divideSound from "./audio/div.mp3";
import equalSound from "./audio/result.mp3";
import clearSound from "./audio/clear.mp3";

function App() {
  const [display, setDisplay] = useState("");

  const sounds = {
    "0": sound0,
    "1": sound1,
    "2": sound2,
    "3": sound3,
    "4": sound4,
    "5": sound5,
    "6": sound6,
    "7": sound7,
    "8": sound8,
    "9": sound9,
    "+": plusSound,
    "-": minusSound,
    "*": multiplySound,
    "/": divideSound,
  };

  const playSound = (value) => {
    const audio = new Audio(sounds[value]);
    audio.play();
  };

  const addValue = (value) => {
    playSound(value);
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    const audio = new Audio(clearSound);
    audio.play();
    setDisplay("");
  };

  const calculate = () => {
    const audio = new Audio(equalSound);
    audio.play();

    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h2>🔢 Voice Calculator</h2>

        <input
          type="text"
          value={display}
          readOnly
          className="display"
        />

        <div className="buttons">
          <button onClick={clearDisplay}>C</button>
          <button onClick={() => addValue("/")}>÷</button>
          <button onClick={() => addValue("*")}>×</button>
          <button onClick={() => addValue("-")}>−</button>

          <button onClick={() => addValue("7")}>7</button>
          <button onClick={() => addValue("8")}>8</button>
          <button onClick={() => addValue("9")}>9</button>
          <button onClick={() => addValue("+")}>+</button>

          <button onClick={() => addValue("4")}>4</button>
          <button onClick={() => addValue("5")}>5</button>
          <button onClick={() => addValue("6")}>6</button>

          <button className="equal" onClick={calculate}>
            =
          </button>

          <button onClick={() => addValue("1")}>1</button>
          <button onClick={() => addValue("2")}>2</button>
          <button onClick={() => addValue("3")}>3</button>

          <button className="zero" onClick={() => addValue("0")}>
            0
          </button>

          <button onClick={() => addValue(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;