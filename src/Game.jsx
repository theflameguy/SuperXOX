import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Game.css';

import { useState } from 'react';

const initialBoards = Array(9).fill(null).map(() => Array(9).fill(null));

const colorPallet = {
  color1 : '#181C14',
  color2 : '#3C3D37',
  color3 : '#697565',
  color4 : '#ECDFCC'

}

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

const calculateBoardWinner = (board) => {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const calculateGridWinner = (boards) => {
  const gridWinners = boards.map((board) => calculateBoardWinner(board));
  
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (gridWinners[a] && gridWinners[a] === gridWinners[b] && gridWinners[a] === gridWinners[c]) {
      return gridWinners[a];
    }
  }
  return null;
};

function Game() {
  const [boards, setBoards] = useState(initialBoards);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [lastMove, setLastMove] = useState([null,null]);
  
  const checkInvalidMove = (boardIndex) => {
    if(calculateBoardWinner(boards[boardIndex])) return 1;
    
    let invalid_move_flag = 0
    
    if(lastMove[1]!= null && lastMove[1]!=boardIndex) invalid_move_flag=1;
    if(lastMove[1]!= null && calculateBoardWinner(boards[lastMove[1]])) invalid_move_flag=0;
    
    return invalid_move_flag
    
  }


  const handleClick = (boardIndex, cellIndex) => {
    if (winner || boards[boardIndex][cellIndex]) return;
    
    const newBoards = boards.map((board, i) => 
      i === boardIndex 
        ? board.map((cell, j) => j === cellIndex ? (xIsNext ? 'X' : 'O') : cell)
        : board
    );

    if(checkInvalidMove(boardIndex)) return;


    

    setLastMove([boardIndex,cellIndex])
    setBoards(newBoards);
    setXIsNext(!xIsNext);

    const newWinner = calculateGridWinner(newBoards);
    setWinner(newWinner);
  };

  const renderBoard = (boardIndex) => (
    <Board
      board={boards[boardIndex]}
      onClick={(cellIndex) => handleClick(boardIndex, cellIndex)}
      
    />
  );

  const miniBoardStyle =(i) =>({
    border: '1px solid black',
    padding: '2px',
    background: checkInvalidMove(i) ?  '#393E46' : '#71C9CE',
    margin: 'auto',
    transition: 'background-color 0.5s ease',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
  })



  return (
    <div>
      <h3 style={{ padding: '15px', textAlign: 'center' }} >
        {!winner 
          ? `Next player: ${xIsNext ? 'X' : 'O'}`
          : `Woohoo!! ${winner} won`}
      </h3>
      <div className='fullBoard'>
        {Array(9).fill(null).map((_, i) => (
          <div className='miniBoard' key={i} style={miniBoardStyle(i)}>
            {renderBoard(i)}
          </div>
        ))}
      </div>
      {winner && <div>{`Winner: ${winner}`}</div>}
    </div>
  );
}



function Square({ value, onClick, style }) {
  return (
    <button 
      style={style}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Board({ board, onClick}) {
  return (
    <div style={{ display: 'grid',gridGap: '0px' , gridTemplateColumns: 'auto auto auto' }}>
      {board.map((cell, i) => (
        <Square key={i} value={cell} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Game