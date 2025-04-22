import { create } from "zustand";
import { PlayerSymbolType } from "../types/symbolTypes";

interface State {
  winner: PlayerSymbolType | null;
  draw: boolean;
  setWinner: (value: PlayerSymbolType | null) => void;
  setDraw: (value: boolean) => void;
}

export const winStore = create<State>((set) => ({
  winner: null,
  draw: false,
  setWinner: (value) => set({ winner: value }),
  setDraw: (value) => set({ draw: value }),
}));
