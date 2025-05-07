export default class Player {
  static fromPlayer(oldPlayer) {
    return new Player(
      oldPlayer.name,
      oldPlayer.score,
      oldPlayer.scoreHistory,
      oldPlayer.total
    );
  }
  constructor(name, score, scoreHistory, total) {
    this.name = name;
    this.score = score ?? 0;
    this.scoreHistory = scoreHistory ?? [];
    this.total = total ?? 0;
  }

  addScore = (score) => {
    this.score += score;
    console.log(`${this.name} scored ${score}`);
  };

  completeRound = () => {
    this.scoreHistory.push(this.score);
    this.total += this.score;
    this.score = 0;
  };
}
