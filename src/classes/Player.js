export default class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.scoreHistory = [];
    this.total = 0;
  }

  addScore = (score) => {
    this.score += score;
  };

  completeRound = () => {
    this.scoreHistory.push(this.score);
    this.total += this.score;
    this.score = 0;
  };
}
