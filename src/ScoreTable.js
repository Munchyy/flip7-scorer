import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
const ScoreTable = ({ players, roundNumber, onAddScore }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Current Round</TableCell>
            <TableCell>Total</TableCell>
            {new Array(roundNumber).fill(0).map((_, i) => (
              <TableCell>Round {i + 1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, playerIndex) => (
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                {player.name?.toUpperCase() ?? "undefined"}
              </TableCell>
              <TableCell>
                {player.score || (
                  <IconButton
                    color="secondary"
                    onClick={() => onAddScore(playerIndex)}
                  >
                    <CalculateIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell>{player.total}</TableCell>
              {player.scoreHistory.map((score) => (
                <TableCell>{score || "BUST"}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
