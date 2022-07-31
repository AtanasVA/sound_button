function SoundPlayer(props) {
  const audioSound = new Audio(props.sound.src);

  const start = () => {
    audioSound.play();
  };
  const stop = () => {
    audioSound.pause();
  };

  return (
    <div>
      <h1>{props.sound.name}</h1>
      <button onClick={start}>▶️</button>
      <button onClick={stop}>⏹︎</button>
    </div>
  );
}
export default SoundPlayer;
