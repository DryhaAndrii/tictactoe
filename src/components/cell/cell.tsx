import { CellValueType } from "@/types/symbolTypes";
import "./cell.scss";
import CrossSVG from "@/components/icons/cross.icon";
import CircleSVG from "@/components/icons/circle.icon";

interface WinningCell {
  row: number;
  col: number;
}

interface CellProps {
  cell: CellValueType;
  cellIndex: number;
  rowIndex: number;
  winningCells: WinningCell[];
  cellClickHandler: (cellIndex: number, rowIndex: number) => void;
}

export default function Cell({
  cell,
  cellIndex,
  rowIndex,
  cellClickHandler,
  winningCells,
}: CellProps) {
  const isWinningCell = winningCells.some(
    (wc) => wc.row === rowIndex && wc.col === cellIndex
  );

  function clickHandler() {
    if (cell === null) cellClickHandler(cellIndex, rowIndex);
  }

  return (
    <div
      className={`cellContainer ${isWinningCell ? "winning" : ""}`}
      onClick={clickHandler}
    >
      {cell === null && <div></div>}
      {cell === "cross" && (
        <div className="cross">
          <CrossSVG />
        </div>
      )}
      {cell === "circle" && (
        <div className="circle">
          <CircleSVG />
        </div>
      )}
    </div>
  );
}
