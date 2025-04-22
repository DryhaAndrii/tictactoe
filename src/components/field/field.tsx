import { useState } from "react";
import "./field.scss";
import Cell from "@/components/cell/cell";
import { CellValueType } from "@/types/symbolTypes";
import { currentPlayerStore } from "@/store/currentPlayerStore";
import Button from "../button/button";
import { playersTimeStore } from "@/store/playerTimeStore";
import { checkWinner } from "@/functions/checkWinner";
import { winStore } from "@/store/winStore";

interface Props {
  fieldSize: number;
}
interface WinningCell {
  row: number;
  col: number;
}

export default function Field({ fieldSize }: Props) {
  const { currentPlayer, setCurrentPlayer } = currentPlayerStore();
  const { resetTimes, setStopTimer } = playersTimeStore();
  const { setWinner, setDraw} = winStore();
  const [winningCells, setWinningCells] = useState<WinningCell[]>([]);
  const [gameEnd, setGameEnd] = useState(false);

  const [field, setField] = useState<CellValueType[][]>(
    Array(fieldSize).fill(Array(fieldSize).fill(null))
  );

  function newGameButtonHandler() {
    setField(Array(fieldSize).fill(Array(fieldSize).fill(null)));
    resetTimes();
    setCurrentPlayer("cross");
    setWinningCells([]);
    setGameEnd(false);
  }

  function cellClickHandler(cellIndex: number, rowIndex: number) {
    if (gameEnd) return;
    setField((prevField) => {
      const newRow = [...prevField[rowIndex]];
      if (newRow[cellIndex] !== null) return prevField;

      newRow[cellIndex] = currentPlayer;

      const newField = [...prevField];
      newField[rowIndex] = newRow;

      setCurrentPlayer(currentPlayer === "cross" ? "circle" : "cross");

      const winCheck = checkWinner(newField, fieldSize);
      if (winCheck.winner) {
        setStopTimer();
        setWinner(winCheck.winner);
        setWinningCells(winCheck.winningCells ?? []);
        setGameEnd(true);
      }
      if (winCheck.isDraw) {
        setStopTimer();
        setDraw(true);
        setGameEnd(true);
      }
      return newField;
    });
  }

  return (
    <div className="fieldContainer">
      <div className="field">
        {field.map((row, rowIndex) => {
          return (
            <div className="row" key={rowIndex}>
              {row.map((cell, cellIndex) => {
                return (
                  <Cell
                    key={cellIndex}
                    cell={cell}
                    cellIndex={cellIndex}
                    rowIndex={rowIndex}
                    cellClickHandler={cellClickHandler}
                    winningCells={winningCells}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <Button onClick={newGameButtonHandler}>Нова гра</Button>
    </div>
  );
}
