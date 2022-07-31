import "./SoundPlayer.css";

function SoundPlayer(props) {
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

  return (
    <div className="element">
      <h1 className="soundName">{props.sound.name}</h1>
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
