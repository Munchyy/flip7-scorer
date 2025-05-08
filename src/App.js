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
  const [adding, setAdding] = useState(true);

  const onCompleteRound = () => {
    setRoundNumber(roundNumber + 1);
    players.forEach((player) => {
      player.completeRound();
    });
  };

  const addPresetPlayers = () => {
    setPlayers([
      new Player("Max", "#88f686"),
      new Player("Char", "#eb77ed"),
      new Player("Livvy", "#40E0D0"),
      new Player("Charlie", "#CB0404"),
      new Player("Rob", "#027a2b"),
      new Player("Jack", "#002884"),
      new Player("Anji", "#FEBA17"),
      new Player("Zoe", "#8B5DFF"),
    ]);
    setAdding(false);
  };

  const onPlayerAdd = (name, color) => {
    setPlayers([...players, new Player(name, color)]);
    console.log({ name, color });
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
        {adding && (
          <>
            <AddPlayer onPlayerAdd={onPlayerAdd} />
            <Box sx={{ padding: "4px" }} />
            {!players.length ? (
              <Button
                size="large"
                variant="contained"
                onClick={addPresetPlayers}
              >
                Add Preset Players
              </Button>
            ) : (
              <Button
                size="large"
                variant="contained"
                onClick={() => setAdding(false)}
              >
                Finish adding
              </Button>
            )}
            <hr />
          </>
        )}
        <Button variant="contained" size="large" onClick={onCompleteRound}>
          complete round
        </Button>
        <Box sx={{ padding: "12px" }} />
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
