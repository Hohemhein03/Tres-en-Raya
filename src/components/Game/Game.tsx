import { useState } from "react";
import { Board } from "../Board/Board";
import "./Game.css";
import Turn from "../Turn/Turn";
import { Button } from "@mui/material";
import CustomModal from "../Modal/CustomModal";

type NumberWinsType = 1 | 2 | 3
type WinsType = null | NumberWinsType

export const Game = () => {
  const [wins, setWins] = useState<WinsType>(null);
  const [turn, setTurn] = useState(false);
  const [reset, setReset] = useState(0);

  function playWins(state: NumberWinsType) {
    setWins(state);
  }

  function chanceTurn() {
    setTurn(!turn);
  }

  function clean() {
    setWins(null);
    chanceTurn();
    setReset(reset + 1);
  }

  return (
    <>
      <div className="containerGame">
        <Turn turn={turn} />
        <div className="containerBoard">
          <Board
            key={reset}
            wins={wins}
            turn={turn}
            playWins={playWins}
            chanceTurn={chanceTurn}
          />
        </div>
        <div className="btns">
          <Button className="btnReset" onClick={clean}>
            Reiniciar
          </Button>
        </div>
      </div>
      <CustomModal wins={wins}/>
    </>
  );
};
