function SoundPlayer(props) {
  const audioSound = new Audio(props.sound.src);
  console.log(props.name);

  const start = () => {
    audioSound.play();
  };

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={start}>{props.sound.name}</button>
    </div>
  );
}

export default SoundPlayer;
