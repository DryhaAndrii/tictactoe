import "./sizePanel.scss";
import { fieldSizeStore } from "@/store/fieldSizeStore";

export default function SizePanel() {
  const { x, y, setX, setY } = fieldSizeStore();

  // Обработчик изменения значений в input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "x" | "y"
  ) => {
    const value = Number(e.target.value);
    

    if (field === "x") return setX(value);
    setY(value);
  };

  return (
    <div className="sizePanel">
      <input
        type="number"
        min="3"
        max="9"
        value={x}
        onChange={(e) => handleChange(e, "x")}
      />
      <span>&#10006;</span>
      <input
        type="number"
        min="3"
        max="9"
        value={y}
        onChange={(e) => handleChange(e, "y")}
      />
    </div>
  );
}
