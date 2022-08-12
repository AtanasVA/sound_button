/*Will add a button only for Pingu, that when clicked
 changes the name to ‘Don’t click on random things :)
 */
import React from "react";
import "./SecretButton.css";

function SecretButton(props) {
  return (
    <div>
      {props.currentName === "Pingu" && (
        <button onClick={props.soundNameChange} className="secretButton">
          👀
        </button>
      )}
      {props.currentName === "Don’t click on random things :)" && (
        <button onClick={props.onFix} className="secretButtonFix">
          Ok change it back
        </button>
      )}
    </div>
  );
}

export default SecretButton;
