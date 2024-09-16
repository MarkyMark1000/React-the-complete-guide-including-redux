import {useState} from 'react';

const initialBoardGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialBoardGame);

    console.log('gameBoard: ', gameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // IMPORTANT - Take a copy of the old array
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex) => <li key={rowIndex}>
                    <ol>{
                    row.map(
                        (playSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playSymbol}</button>
                        </li>
                    )
                }</ol>
                </li>
            )}
        </ol>
    );
}
