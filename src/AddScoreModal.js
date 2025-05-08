import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddScoreModal = ({ label, onSetScore, onCancel }) => {
  const [score, setScore] = useState();
  return (
    <Dialog
      open
      slotProps={{
        paper: {
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            onSetScore(score || 0);
          },
        },
      }}
    >
      <DialogTitle>{label}</DialogTitle>
      <DialogContent>
        <Box sx={{ padding: "4px" }}>
          <TextField
            inputRef={(input) => input && input.focus()}
            autoFocus
            type="number"
            label="Score"
            value={score}
            onChange={({ target: { value } }) => setScore(+value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit">Score</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScoreModal;
