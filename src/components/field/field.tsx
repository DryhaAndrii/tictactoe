import { useEffect, useState } from "react";
import "./field.scss";
import Cell from "@/components/cell/cell";
import { CellValueType } from "@/types/symbolTypes";
import { currentPlayerStore } from "@/store/currentPlayerStore";
import Button from "../button/button";
import { playersTimeStore } from "@/store/playerTimeStore";
import { checkWinner } from "@/functions/checkWinner";

interface Props {
  x: number;
  y: number;
}

export default function Field({ x, y }: Props) {
  const { currentPlayer, setCurrentPlayer } = currentPlayerStore();
  const {resetTimes} = playersTimeStore();

  const [field, setField] = useState<CellValueType[][]>(
    Array(y).fill(Array(x).fill(null))
  );

  useEffect(() => {    
  }, [x, y]);

  function buttonHandler(){
    setField(Array(y).fill(Array(x).fill(null)));
    resetTimes();
    setCurrentPlayer('cross')
  }

  function cellClickHandler(cellIndex: number, rowIndex: number) {
    setField((prevField) => {
      const newRow = [...prevField[rowIndex]];
      if (newRow[cellIndex] !== null) return prevField;

      newRow[cellIndex] = currentPlayer;

      const newField = [...prevField];
      newField[rowIndex] = newRow;

      setCurrentPlayer(currentPlayer === "cross" ? "circle" : "cross");

      const winCheck = checkWinner(newField);
      if(winCheck.winner) console.log("WINNER")
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
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <Button onClick={buttonHandler}>Нова гра</Button>
    </div>
  );
}
