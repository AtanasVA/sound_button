function SoundPlayer() {
  const audioSound = new Audio(require("./badumtss.mp3"));

  const start = () => {
    audioSound.play();
  };

  return (
    <div>
      <h1>BadumTss</h1>
      <button onClick={start}>BadumTss</button>
    </div>
  );
}

export default SoundPlayer;
