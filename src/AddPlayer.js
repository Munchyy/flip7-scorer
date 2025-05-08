import { IconButton, TextField } from "@mui/material";
import { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";

const AddPlayer = ({ onPlayerAdd }) => {
  const [name, setName] = useState("");
  const [colorValue, setColorValue] = useState("");
  const textFieldRef = useRef(null);
  const onAdd = (e) => {
    e?.preventDefault();
    onPlayerAdd(name, colorValue);
    setName("");
    setColorValue("");
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
      <MuiColorInput
        format="hex"
        value={colorValue}
        onChange={(newColor) => setColorValue(newColor)}
      />
      <IconButton type="submit" size="large" disabled={!(colorValue && name)}>
        <AddIcon fontSize="large" />
      </IconButton>
    </form>
  );
};

export default AddPlayer;
