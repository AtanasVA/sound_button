import SoundPlayer from "./SoundPlayer";
import "./App.css";

function App() {
  const sounds = {
    pingu: {
      name: "Pingu",
      src: require("./noot.mp3"),
    },
    badumtss: {
      name: "BadumTss",
      src: require("./badumtss.mp3"),
    },
    iphone: {
      name: "iPhoneRing",
      src: require("./iPhoneRing.mp3"),
    },
  };

  return (
    <div>
      <SoundPlayer sound={sounds.pingu} />
      <SoundPlayer sound={sounds.badumtss} />
      <SoundPlayer sound={sounds.iphone} />
    </div>
  );
}

export default App;
