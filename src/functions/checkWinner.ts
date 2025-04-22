import { CellValueType } from "@/types/symbolTypes";

interface CheckWinnerResult {
  winner: CellValueType | null;
  isDraw: boolean;
  winningCells?: { row: number; col: number }[];
}

export function checkWinner(
  field: CellValueType[][],
  winSequenceLength: number = 3
): CheckWinnerResult {
  const rows = field.length;
  const cols = field[0]?.length || 0;

  const sequenceLength = Math.min(Math.max(winSequenceLength, 3), 9);

  let hasEmptyCell = false;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col <= cols - sequenceLength; col++) {
      const symbol = field[row][col];
      if (!symbol) continue;

      let isWin = true;
      const winningCells = [{ row, col }];
      
      for (let i = 1; i < sequenceLength; i++) {
        if (field[row][col + i] !== symbol) {
          isWin = false;
          break;
        }
        winningCells.push({ row, col: col + i });
      }

      if (isWin) {
        return { winner: symbol, isDraw: false, winningCells };
      }
    }
  }

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row <= rows - sequenceLength; row++) {
      const symbol = field[row][col];
      if (!symbol) continue;

      let isWin = true;
      const winningCells = [{ row, col }];
      
      for (let i = 1; i < sequenceLength; i++) {
        if (field[row + i][col] !== symbol) {
          isWin = false;
          break;
        }
        winningCells.push({ row: row + i, col });
      }

      if (isWin) {
        return { winner: symbol, isDraw: false, winningCells };
      }
    }
  }

  for (let row = 0; row <= rows - sequenceLength; row++) {
    for (let col = 0; col <= cols - sequenceLength; col++) {
      const symbol = field[row][col];
      if (!symbol) continue;

      let isWin = true;
      const winningCells = [{ row, col }];
      
      for (let i = 1; i < sequenceLength; i++) {
        if (field[row + i][col + i] !== symbol) {
          isWin = false;
          break;
        }
        winningCells.push({ row: row + i, col: col + i });
      }

      if (isWin) {
        return { winner: symbol, isDraw: false, winningCells };
      }
    }
  }

  for (let row = 0; row <= rows - sequenceLength; row++) {
    for (let col = sequenceLength - 1; col < cols; col++) {
      const symbol = field[row][col];
      if (!symbol) continue;

      let isWin = true;
      const winningCells = [{ row, col }];
      
      for (let i = 1; i < sequenceLength; i++) {
        if (field[row + i][col - i] !== symbol) {
          isWin = false;
          break;
        }
        winningCells.push({ row: row + i, col: col - i });
      }

      if (isWin) {
        return { winner: symbol, isDraw: false, winningCells };
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (field[row][col] === null) {
        hasEmptyCell = true;
        break;
      }
    }
    if (hasEmptyCell) break;
  }

  return { winner: null, isDraw: !hasEmptyCell };
}