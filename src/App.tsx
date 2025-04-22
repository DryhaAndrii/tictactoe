import "./App.css";
import Field from "@/components/field/field";
import SizePanel from "./components/sizePanel/sizePanel";
import { fieldSizeStore } from "@/store/fieldSizeStore";
import PlayersPanel from "./components/playersPanel/playersPanel";
import { winStore } from "./store/winStore";
import { useEffect, useState } from "react";
import { playersTimeStore } from "./store/playerTimeStore";
import Modal from "./components/modal/modal";
import TotalGames from "./components/totalGames/totalGames";

function App() {
  const { fieldSize } = fieldSizeStore();
  const [openWinPanel, setWinPanel] = useState(false);
  const [openDrawPanel, setDrawPanel] = useState(false);
  const { winner, setWinner, draw, setDraw } = winStore();
  const { circlePlayerTime, crossPlayerTime } = playersTimeStore();

  useEffect(() => {
    if (winner === null) return;
    setWinPanel(true);
  }, [winner]);

  useEffect(() => {
    if (draw === false) return;
    setDrawPanel(true);
  }, [draw]);

  function onCloseWin() {
    setWinPanel(false);

    const currentWinner = winner;

    if (currentWinner) {
      const storedStats = localStorage.getItem("ticTacToeStats");
      const stats = storedStats
        ? JSON.parse(storedStats)
        : { crossWins: 0, circleWins: 0 };

      if (currentWinner === "cross") {
        stats.crossWins += 1;
      } else if (currentWinner === "circle") {
        stats.circleWins += 1;
      }

      localStorage.setItem("ticTacToeStats", JSON.stringify(stats));
    }
    setWinner(null);
    setDraw(false);
  }

  function onCloseDraw() {
    setDrawPanel(false);
    setDraw(false);
  }
  return (
    <div className="container">
      <SizePanel />
      <PlayersPanel />
      <Field fieldSize={fieldSize} />
      <TotalGames />

      <Modal isOpen={openWinPanel} onClose={onCloseWin}>
        Гравець {winner === "cross" ? "хрестиками" : "нуликами"} переміг за{" "}
        {winner === "cross" ? circlePlayerTime : crossPlayerTime} секунд
      </Modal>

      <Modal isOpen={openDrawPanel} onClose={onCloseDraw}>
        Нічия! Гра йшла {crossPlayerTime + circlePlayerTime} секунд. Спробуйте
        ще :D
      </Modal>

    </div>
  );
}

export default App;
