import { winStore } from "@/store/winStore";
import { useEffect, useState } from "react";

interface GameStats {
  crossWins: number;
  circleWins: number;
}

export default function TotalGames() {
  const [totalGames, setTotalGames] = useState(0);
  const { draw, winner } = winStore();

  useEffect(() => {
    const savedStats = localStorage.getItem("ticTacToeStats");
    if (savedStats) {
      try {
        const parsedStats: GameStats = JSON.parse(savedStats);
        setTotalGames(parsedStats.crossWins + parsedStats.circleWins);
      } catch (error) {
        console.error("Error parsing stats:", error);
      }
    }
  }, [draw, winner]);

  return <div>Загальна кільість ігор: {totalGames}</div>;
}
