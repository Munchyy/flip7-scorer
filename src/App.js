import { Box, Button } from "@mui/material";
import { useState } from "react";
import AddPlayer from "./AddPlayer";
import Player from "./classes/Player";
import ScoreTable from "./ScoreTable";
import AddScoreModal from "./AddScoreModal";
const App = () => {
  const [players, setPlayers] = useState([]);
  const [roundNumber, setRoundNumber] = useState(0);
  const [scoreModalPlayer, setScoreModalPlayer] = useState(null);
  const onCompleteRound = () => {
    setRoundNumber(roundNumber + 1);
    players.forEach((player) => {
      player.completeRound();
    });
  };

  const onPlayerAdd = (name) => {
    setPlayers([...players, new Player(name)]);
  };

  const onAddScore = (playerIndex) => {
    setScoreModalPlayer(playerIndex);
  };

  const onScoreCancel = () => {
    setScoreModalPlayer(null);
  };
  const onSetScore = (newSore) => {
    const newPlayer = Player.fromPlayer(players[scoreModalPlayer]);
    newPlayer.addScore(newSore);
    players[scoreModalPlayer] = newPlayer;
    const newPlayerList = [
      ...players.slice(0, scoreModalPlayer),
      newPlayer,
      ...players.slice(scoreModalPlayer + 1),
    ];
    setPlayers(newPlayerList);
    setScoreModalPlayer(null);
  };
  return (
    <>
      <Box sx={{ margin: 2 }}>
        <AddPlayer onPlayerAdd={onPlayerAdd} />
        <hr />
        <Button onClick={onCompleteRound}>complete round</Button>
        <ScoreTable
          players={players}
          roundNumber={roundNumber}
          onAddScore={onAddScore}
        />
      </Box>
      {scoreModalPlayer !== null && (
        <AddScoreModal
          label={`Add score for ${players[scoreModalPlayer].name}`}
          onSetScore={onSetScore}
          onCancel={onScoreCancel}
        />
      )}
    </>
  );
};

export default App;
