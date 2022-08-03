/*Will add a button only for Pingu, that when clicked
 changes the name to ‘Don’t click on random things :)
 */

import React, { useState } from "react";

function SecretButton(props) {
  const [title, setTitle] = useState(props.soundName);
  console.log(props.soundName);

  const clickHandler = () => {
    setTitle("Don’t click on random things :)");
    console.log(title);
  };

  return (
    <button onClick={clickHandler} className="secretButton">
      👀
    </button>
  );
}

export default SecretButton;
