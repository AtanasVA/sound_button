import React, { useState } from "react";
import SoundPlayer from "./SoundPlayer";
import "./App.css";
import UserLogin from "./Login/UserLogin";
import UserLogOut from "./Login/UserLogOut";
import Cromulon from "./Secret/Cromulon";

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
  const [isLogged, updateIsLogged] = useState(false);

  const getUserDetails = (userDetails) => {
    updateUserData(userDetails);
  };
  const verifyUser = (username, password) => {
    if (username === "Nasko" && password.toString() === "1996") {
      updateIsLogged(true);
    }
  };

  const onLogout = () => {
    updateIsLogged(false);
  };

  return (
    <React.Fragment>
      <Cromulon />
      {!isLogged && (
        <UserLogin
          userDetails={getUserDetails}
          verifyUser={verifyUser}
          whenLogout={updateIsLogged}
        ></UserLogin>
      )}
      {isLogged &&
        sounds.map((sound) => (
          <SoundPlayer key={sounds.indexOf(sound)} sound={sound} />
        ))}
      {isLogged && <UserLogOut onLogout={onLogout} />}
    </React.Fragment>
  );
}

export default App;
