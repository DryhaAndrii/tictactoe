import "./sizePanel.scss";
import { fieldSizeStore } from "@/store/fieldSizeStore";

export default function SizePanel() {
  const { fieldSize, setFieldSize } = fieldSizeStore();

  const changeSize = (delta: number) => {
    const newFieldSize = fieldSize + delta;

    if (newFieldSize >= 3 && newFieldSize <= 9) {
      setFieldSize(newFieldSize);
    }
  };

  return (
    <div className="sizePanel">
      <button
        className="sizeButton"
        onClick={() => changeSize(-1)}
        disabled={fieldSize <= 3}
      >
        -
      </button>

      <span className="sizeDisplay">
        {fieldSize} &#10006; {fieldSize}
      </span>

      <button
        className="sizeButton"
        onClick={() => changeSize(1)}
        disabled={fieldSize >= 9}
      >
        +
      </button>
    </div>
  );
}
