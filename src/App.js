import React, { useState } from "react";
import SoundPlayer from "./SoundPlayer";
import "./App.css";
import UserLogin from "./Login/UserLogin";

const sounds = [
  {
    name: "Pingu",
    src: require("./sounds/noot.mp3"),
  },
  {
    name: "BadumTss",
    src: require("./sounds/badumtss.mp3"),
  },
  {
    name: "iPhoneRing",
    src: require("./sounds/iPhoneRing.mp3"),
  },
];

function App() {
  const [userData, updateUserData] = useState("");

  const getUserDetails = (userDetails) => {
    updateUserData(userDetails);
  };

  return (
    <React.Fragment>
      <UserLogin userDetails={getUserDetails}></UserLogin>
      {userData &&
        sounds.map((sound) => (
          <SoundPlayer key={sounds.indexOf(sound)} sound={sound} />
        ))}
    </React.Fragment>
  );
}

export default App;
