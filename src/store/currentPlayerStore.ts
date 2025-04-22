import { create } from "zustand";
import { PlayerSymbolType } from "../types/symbolTypes";

interface State {
  currentPlayer: PlayerSymbolType;

  setCurrentPlayer: (value: PlayerSymbolType) => void;
}

export const currentPlayerStore = create<State>((set) => ({
  currentPlayer: "cross",
  setCurrentPlayer: (value) => set({ currentPlayer: value }),
}));
