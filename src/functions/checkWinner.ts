import { CellValueType } from "@/types/symbolTypes";

export function checkWinner(field: CellValueType[][]): {
  winner: CellValueType | null;
  isDraw: boolean;
} {
  const y = field.length;
  const x = field[0]?.length || 0;

  let hasEmptyCell = false;

  // Проверка по строкам
  for (let row = 0; row < y; row++) {
    for (let col = 0; col <= x - 3; col++) {
      const symbol = field[row][col];
      if (
        symbol &&
        field[row][col + 1] === symbol &&
        field[row][col + 2] === symbol
      ) {
        return { winner: symbol, isDraw: false };
      }
    }
  }

  // Проверка по столбцам
  for (let col = 0; col < x; col++) {
    for (let row = 0; row <= y - 3; row++) {
      const symbol = field[row][col];
      if (
        symbol &&
        field[row + 1][col] === symbol &&
        field[row + 2][col] === symbol
      ) {
        return { winner: symbol, isDraw: false };
      }
    }
  }

  // Диагонали слева-направо
  for (let row = 0; row <= y - 3; row++) {
    for (let col = 0; col <= x - 3; col++) {
      const symbol = field[row][col];
      if (
        symbol &&
        field[row + 1][col + 1] === symbol &&
        field[row + 2][col + 2] === symbol
      ) {
        return { winner: symbol, isDraw: false };
      }
    }
  }

  // Диагонали справа-налево
  for (let row = 0; row <= y - 3; row++) {
    for (let col = 2; col < x; col++) {
      const symbol = field[row][col];
      if (
        symbol &&
        field[row + 1][col - 1] === symbol &&
        field[row + 2][col - 2] === symbol
      ) {
        return { winner: symbol, isDraw: false };
      }
    }
  }

  // Проверка на ничью (если все ячейки заняты)
  for (let row = 0; row < y; row++) {
    for (let col = 0; col < x; col++) {
      if (field[row][col] === null) {
        hasEmptyCell = true;
        break;
      }
    }
  }

  return { winner: null, isDraw: !hasEmptyCell };
}