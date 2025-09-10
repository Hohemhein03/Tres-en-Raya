import "./Board.css";
import { useState } from "react";
import { Celd } from "../Celd/Celd";

type NumberWinsType = 1 | 2 | 3
interface Props {
  wins: NumberWinsType | null;
  playWins: (state: NumberWinsType) => void;
  turn: boolean;
  chanceTurn: () => void;
}

export const Board = (props: Props) => {
  const { wins, playWins, turn, chanceTurn } = props;

  const [table, setTable] = useState(initialValuesTable);
  const [winningCelds, setWinningCelds] = useState<number[]>([]);

  function initialValuesTable() {
    return Array(3).fill(Array(3).fill(null));
  }

  const playValidation = (newTable: number[][]) => {
    function convertToIndex(row: number, col: number) {
      return row * 3 + col;
    }

    //horizontal
    for (let i = 0; i <= 2; i++)
      if (
        newTable[i][0] !== null &&
        newTable[i][0] === newTable[i][1] &&
        newTable[i][0] === newTable[i][2]
      ) {
        setWinningCelds([
          convertToIndex(i, 0),
          convertToIndex(i, 1),
          convertToIndex(i, 2),
        ]);
        playWins(turn ? 1 : 2);
        return;
      }

    //vertical
    for (let i = 0; i <= 2; i++)
      if (
        newTable[0][i] !== null &&
        newTable[0][i] === newTable[1][i] &&
        newTable[0][i] === newTable[2][i]
      ) {
        setWinningCelds([
          convertToIndex(0, i),
          convertToIndex(1, i),
          convertToIndex(2, i),
        ]);
        playWins(turn ? 1 : 2);
        return;
      }

    //diagonal
    if (
      newTable[0][0] !== null &&
      newTable[0][0] === newTable[1][1] &&
      newTable[0][0] === newTable[2][2]
    ) {
      setWinningCelds([
        convertToIndex(0, 0),
        convertToIndex(1, 1),
        convertToIndex(2, 2),
      ]);
      playWins(turn ? 1 : 2);
      return;
    }
    if (
      newTable[0][2] !== null &&
      newTable[0][2] === newTable[1][1] &&
      newTable[0][2] === newTable[2][0]
    ) {
      setWinningCelds([
        convertToIndex(0, 2),
        convertToIndex(1, 1),
        convertToIndex(2, 0),
      ]);
      playWins(turn ? 1 : 2);
      return;
    }

    let cont = 0;
    for( let i = 0; i <= 2; i++ )
      for( let j = 0; j <= 2; j++ )
        if( newTable[i][j] !== null )cont++

    if( cont === 9 )playWins(3)
    return
  };

  function updateTable(index: number) {
    const col = index % 3;
    const row = Math.trunc(index / 3);
    if (table[row][col] !== null) return;
    const newTable = table.map((item) => [...item]);
    newTable[row][col] = turn ? 1 : 2;
    playValidation(newTable);
    setTable(newTable);
    chanceTurn();
  }

  function dontTouch(event: React.MouseEvent) {
    if (wins === null) return;
    event.stopPropagation();
    event.preventDefault();
  }

  function VerifyCeld(index: number) {
    if (winningCelds.length === 0) return null;
    return winningCelds.includes(index);
  }

  return (
    <>
      <div className="containerCelds">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            className="position"
            key={index}
            onClick={() => updateTable(index)}
          >
            <Celd turn={turn} hasWon={VerifyCeld(index)} />
          </div>
        ))}

        <div
          className="blockBoard"
          style={{ display: wins === null ? "none" : "block" }}
          onClick={(e) => dontTouch(e)}
        ></div>
      </div>
    </>
  );
};
