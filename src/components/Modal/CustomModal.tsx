import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";
import "./CustomModal.css"
interface Props {
  wins: null | 1 | 2 | 3;
}

export default function CustomModal(props: Props) {
  const { wins } = props;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (wins !== null) setOpen(true);
  }, [wins]);

  function rainAnimation() {
    if (wins === 1) {
      return (
        <div className="rain-x-container" onClick={handleClose}>
          {
            Array.from({ length: 80 }).map((_, i) => (
              <ClearIcon
                key={i}
                className="rain-x"
                style={{
                  left: `${Math.random() * 95}%`,
                  animationDelay: `${Math.random() * 1.8}s`,
                  fontSize: "2.3rem",
                }}
              />
            ))
          }
        </div>

      )
    }

    if (wins === 2) {
      return (
        <div className="rain-x-container" onClick={handleClose}>
          {
            Array.from({ length: 80 }).map((_, i) => (
              <RadioButtonUncheckedIcon
                key={i}
                className="rain-o"
                style={{
                  left: `${Math.random() * 95}%`,
                  animationDelay: `${Math.random() * 1.8}s`,
                  fontSize: "2rem",
                }}
              />
            ))
          }
        </div>

      )
    }

    return (
        <div className="rain-x-container" onClick={handleClose}>
          {
            Array.from({ length: 40 }).map((_, i) => (
              <RadioButtonUncheckedIcon
                key={i}
                className="rain-o"
                style={{
                  left: `${Math.random() * 95}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                  fontSize: "2rem",
                }}
              />
            ))
          }

          {
            Array.from({ length: 40 }).map((_, i) => (
              <ClearIcon
                key={i}
                className="rain-x"
                style={{
                  left: `${Math.random() * 95}%`,
                  animationDelay: `${Math.random() * 1.8}s`,
                  fontSize: "2.3rem",
                }}
              />
            ))
          }
        </div>

      )

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      
        { open ? rainAnimation() : "" }


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="dialog"
      >


        <DialogTitle className="dialogTitle" id="responsive-dialog-title">
         { wins !== 3 ? "Victoria!!!" : "Empate!!!" } 
        </DialogTitle>
        <DialogContent className="dialogContent">
          

            <div className="containerIcon">
              <ClearIcon
                className="icon figureX"
                sx={{ display: wins !== 2 ? "block" : "none" }}
              />

              <RadioButtonUncheckedIcon
                className="icon figureO"
                sx={{ display: wins !== 1 ? "block" : "none" }}
              />
            </div>

          
        </DialogContent>
      </Dialog>
    </>
  );
}
