import "./App.css";
import Field from "@/components/field/field";
import SizePanel from "./components/sizePanel/sizePanel";
import { fieldSizeStore } from "@/store/fieldSizeStore";
import PlayersPanel from "./components/playersPanel/playersPanel";

function App() {
  const {x,y} = fieldSizeStore();
  return (
    <div className="container">
      <SizePanel />
      <PlayersPanel />
      <Field x={x} y={y}/>
    </div>
  );
}

export default App;
