const initialBoardGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = initialBoardGame;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(initialBoardGame);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         // IMPORTANT - Take a copy of the old array
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex) => <li key={rowIndex}>
                    <ol>{
                    row.map(
                        (playSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playSymbol!==null}>{playSymbol}</button>
                        </li>
                    )
                }</ol>
                </li>
            )}
        </ol>
    );
}
