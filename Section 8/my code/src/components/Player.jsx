import {useState, useRef} from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState();
  const [submitted, setSubmitted] = useState(false);
  const playerName = useRef();

  function handleOnClick() {
    setEnteredPlayerName(playerName.current.value);
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName: ' undefined'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
