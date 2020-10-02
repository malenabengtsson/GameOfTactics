const Game = require('./Game/Game');
module.exports = class Main {
  game = new Game();

  constructor(){
    game.start();
  }
}
