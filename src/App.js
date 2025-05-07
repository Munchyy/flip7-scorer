import { Box, Button } from "@mui/material";
import { useState } from "react";
import AddPlayer from "./AddPlayer";
import Player from "./classes/Player";
import ScoreTable from "./ScoreTable";
const App = () => {
  const [players, setPlayers] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);

  const onCompleteRound = () => {
    setRoundNumber(roundNumber + 1);
    players.forEach((player) => {
      player.completeRound();
    });
  };

  const onPlayerAdd = (name) => {
    setPlayers([...players, new Player(name)]);
  };
  return (
    <Box sx={{ margin: 2 }}>
      <AddPlayer onPlayerAdd={onPlayerAdd} />
      <hr />
      <Button onClick={onCompleteRound}>complete rouynd</Button>
      <ScoreTable players={players} roundNumber={roundNumber} />
    </Box>
  );
};

export default App;
