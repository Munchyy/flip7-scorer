import { IconButton, TextField } from "@mui/material";
import { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const AddPlayer = ({ onPlayerAdd }) => {
  const [name, setName] = useState("");
  const textFieldRef = useRef(null);
  const onAdd = (e) => {
    e?.preventDefault();
    onPlayerAdd(name);
    setName("");
    textFieldRef.current.focus();
  };
  return (
    <form onSubmit={onAdd}>
      <TextField
        inputRef={textFieldRef}
        label="New Player"
        variant="outlined"
        onChange={({ target: { value } }) => {
          setName(value);
        }}
        value={name}
      />
      <IconButton type="submit" size="large">
        <AddIcon />
      </IconButton>
    </form>
  );
};

export default AddPlayer;
