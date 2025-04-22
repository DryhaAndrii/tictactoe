import { CellValueType } from "@/types/symbolTypes";
import "./cell.scss";
import CrossSVG from "@/components/icons/cross.icon";
import CircleSVG from "@/components/icons/circle.icon";

interface CellProps {
  cell: CellValueType;
  cellIndex: number;
  rowIndex: number;
  cellClickHandler: (cellIndex: number, rowIndex: number) => void;
}

export default function Cell({
  cell,
  cellIndex,
  rowIndex,
  cellClickHandler,
}: CellProps) {
  function clickHandler() {
    if (cell === null) cellClickHandler(cellIndex, rowIndex);
  }
  return (
    <div className="cellContainer" onClick={clickHandler}>
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
