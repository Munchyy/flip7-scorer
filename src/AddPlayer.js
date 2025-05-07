import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const AddPlayer = ({ onPlayerAdd }) => {
  const [name, setName] = useState("");
  const onAdd = () => {
    onPlayerAdd(name);
    setName("");
  };
  return (
    <>
      <TextField
        label="New Player"
        variant="outlined"
        onChange={({ target: { value } }) => {
          setName(value);
        }}
        value={name}
      />
      <IconButton onClick={onAdd} size="large">
        <AddIcon />
      </IconButton>
    </>
  );
};

export default AddPlayer;
