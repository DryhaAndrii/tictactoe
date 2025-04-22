import { create } from "zustand";

interface State {
  x: number;
  y: number;

  setX: (value: number) => void;
  setY: (value: number) => void;
}

export const fieldSizeStore = create<State>((set) => ({
  x: 5,
  y: 5,
  setX: (value) => set({ x: value }),
  setY: (value) => set({ y: value }),
}));
