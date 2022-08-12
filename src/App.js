import SoundPlayer from "./SoundPlayer";
import "./App.css";

function App() {
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

  return (
    <div>
      <SoundPlayer sound={sounds[0]} />
      <SoundPlayer sound={sounds[1]} />
      <SoundPlayer sound={sounds[2]} />
    </div>
  );
}

export default App;
