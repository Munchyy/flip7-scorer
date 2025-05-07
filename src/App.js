import { Box } from "@mui/material";
import { useState } from "react";
import AddPlayer from "./AddPlayer";
const App = () => {
  const [players, setPlayers] = useState([]);

  const onPlayerAdd = (name) => {
    setPlayers([...players, name]);
  };
  return (
    <Box sx={{ margin: 2 }}>
      <AddPlayer onPlayerAdd={onPlayerAdd} />
      <ul>
        {players.map((player) => (
          <li>{player}</li>
        ))}
      </ul>
    </Box>
  );
};

export default App;
