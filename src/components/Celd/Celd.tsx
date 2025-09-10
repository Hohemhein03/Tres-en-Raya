import "./Celd.css";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface Props {
  turn: boolean;
  hasWon: boolean | null;
}

export const Celd = (props: Props) => {
  const { turn, hasWon } = props;
  const [displayX, setDisplayX] = useState("none");
  const [displayO, setDisplayO] = useState("none");

  function handleClick() {
    if (displayX !== "none" || displayO !== "none") return;

    if (turn) setDisplayX("block");
    else setDisplayO("block");
  }

  return (
    <>
      <button className="celd" onClick={handleClick}>
        {displayO === "block" && (
          <div
            className={`icon-container ${hasWon === false ? "noActive" : ""}`}
          >
            <RadioButtonUncheckedIcon
              className={`icon figure_O ${hasWon ? "Active" : ""}`}
            />
          </div>
        )}
        {displayX === "block" && (
          <div
            className={`icon-container ${hasWon === false ? "noActive" : ""}`}
          >
            <ClearIcon className={`icon figure_X ${hasWon ? "Active" : ""}`} />
          </div>
        )}
      </button>
    </>
  );
};
