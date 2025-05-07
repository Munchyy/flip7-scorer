import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ScoreTable = ({ players, roundNumber }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          {players.map((player) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.score}</TableCell>
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
