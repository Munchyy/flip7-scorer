import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
const ScoreTable = ({ players, roundNumber, onAddScore }) => {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Current Round</TableCell>
            <TableCell>Total</TableCell>
            {new Array(roundNumber).fill(0).map((_, i) => (
              <TableCell>Round {roundNumber - i}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player, playerIndex) => (
            <TableRow
              sx={{
                backgroundColor: player.color,
                color: theme.palette.getContrastText(player.color),
              }}
            >
              <TableCell
                sx={{ color: "inherit", fontWeight: "bold", fontSize: "1rem" }}
              >
                {player.name?.toUpperCase() ?? "undefined"}
              </TableCell>
              <TableCell sx={{ color: "inherit" }}>
                {player.score || (
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => onAddScore(playerIndex)}
                  >
                    <CalculateIcon fontSize="large" />
                  </IconButton>
                )}
              </TableCell>
              <TableCell sx={{ color: "inherit" }}>
                {player.total}
              </TableCell>
              {[...player.scoreHistory].reverse().map((score) => (
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
