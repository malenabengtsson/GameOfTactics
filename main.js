const Game = require('./Game/Game').default;
module.exports = class Main {
  game = new Game();

  constructor(){
    game.start();
  }
}
