import { useState } from "react";
import Square from "./square/square";

function Board() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (index) => {
    if (squares[index]) return;

    const newSquares = squares.slice();
    newSquares[index] = player;
    setSquares(newSquares);
    setPlayer(player === "X" ? "O" : "X");
  };

  return (
    <div className="board">
      <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
    </div>
  );
}

export default Board;
