import { create } from "zustand";

interface State {
  crossPlayerTime: number;
  circlePlayerTime: number;
  increaseCrossTime: () => void;
  increaseCircleTime: () => void;
  setStopTimer: () => void;
  resetTimes: () => void;
  timerStarted: boolean;
  stopTimer: boolean;
}

export const playersTimeStore = create<State>((set) => ({
  timerStarted: false,
  crossPlayerTime: 0,
  circlePlayerTime: 0,
  stopTimer: false,

  increaseCrossTime: () =>
    set((state) => ({ crossPlayerTime: state.crossPlayerTime + 1 })),
  increaseCircleTime: () =>
    set((state) => ({ circlePlayerTime: state.circlePlayerTime + 1 })),
  resetTimes: () =>
    set((state) => ({
      crossPlayerTime: 0,
      circlePlayerTime: 0,
      timerStarted: !state.timerStarted,
    })),
  setStopTimer: () => set((state) => ({ stopTimer: !state.stopTimer })),
}));
