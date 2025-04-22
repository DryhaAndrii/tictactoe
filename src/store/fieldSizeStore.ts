import { create } from "zustand";

interface State {
  fieldSize: number;

  setFieldSize: (value: number) => void;
}

export const fieldSizeStore = create<State>((set) => ({
  fieldSize: 3,
  setFieldSize: (value) => set({ fieldSize: value }),
}));
