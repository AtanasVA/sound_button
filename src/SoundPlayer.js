import React, { useState } from "react";
import SecretButton from "./Secret/SecretButton";
import "./SoundPlayer.css";

function SoundPlayer(props) {
  const [title, setTitle] = useState(props.sound.name);
  let audioSound = new Audio(props.sound.src);

  const start = () => {
    if (audioSound === "") {
      audioSound = new Audio(props.sound.src);
    }
    audioSound.play();
  };
  const stop = () => {
    audioSound.pause();
    audioSound = "";
  };

  const secretClickHandler = () => {
    setTitle("Don’t click on random things :)");
  };
  const fixPingu = () => {
    setTitle(props.sound.name);
  };

  return (
    <div className="element">
      <h1 className="soundName">{title}</h1>
      {props.sound.name === "Pingu" && (
        <SecretButton
          currentName={title}
          soundNameChange={secretClickHandler}
          onFix={fixPingu}
        />
      )}
      <div className="btnElement">
        <button onClick={start} className="btnPlay">
          ▶️
        </button>
        <button onClick={stop} className="btnStop">
          ⏹︎
        </button>
      </div>
    </div>
  );
}
export default SoundPlayer;
