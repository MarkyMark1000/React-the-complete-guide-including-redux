import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './winning-combinations';


function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  
  const [gameTurns, setGameTurns] = useState([]);

  // reduce state by removing this and calculating the active player:
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer==='X' ? 'O' : 'X');
    setGameTurns(prevTurns => {

      // INSTEAD OF USING activePlayer HERE, WE USE LOGIC TO DETERMING WHO HIT THE
      // BUTTON

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer},...prevTurns];

      return updatedTurns;

    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayerName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialPlayerName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
