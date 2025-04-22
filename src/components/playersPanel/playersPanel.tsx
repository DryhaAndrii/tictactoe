import { currentPlayerStore } from "@/store/currentPlayerStore";
import { playersTimeStore } from "@/store/playerTimeStore";

import "./playersPanel.scss";
import { useEffect, useRef, useState } from "react";

export default function PlayersPanel() {
  const {
    circlePlayerTime,
    crossPlayerTime,
    increaseCircleTime,
    increaseCrossTime,
    timerStarted,
    stopTimer,
    setStopTimer,
  } = playersTimeStore();
  const { currentPlayer } = currentPlayerStore();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [initialStart, setInitialStart] = useState(false);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (currentPlayer === "circle") {
        increaseCrossTime();
      } else {
        increaseCircleTime();
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentPlayer, timerStarted]);

  useEffect(() => {
    if (intervalRef.current && initialStart) {
      clearInterval(intervalRef.current);
    }
    setInitialStart(true);
  }, [stopTimer]);

  return (
    <div className="playersPanel">
      <div className={currentPlayer === "cross" ? "big" : ""}>
        <div>
          Гравець <div style={{ color: "red" }}>&#10006;</div>
        </div>
        <div>Затрачений час: {circlePlayerTime}</div>
        <div>Кількість виграшів 2</div>
      </div>
      <div className={currentPlayer === "circle" ? "big" : ""}>
        <div>
          Гравець <span style={{ color: "blue" }}>&#9900;</span>
        </div>
        <div>Затрачений час: {crossPlayerTime}</div>
        <div>Кількість виграшів 3</div>
      </div>
    </div>
  );
}
