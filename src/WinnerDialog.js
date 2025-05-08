import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const WinnerDialog = ({ winners }) => {
  return (
    <React.Fragment>
      <Dialog open>
        <DialogTitle>Game Over</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`${winners.map((winner) => winner.name).join(" and ")} won!`}
          </DialogContentText>
          <hr />
          <ul>
            {winners.map((winner) => (
              <li>{`${winner.name}: ${winner.total}`}</li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
export default WinnerDialog;
