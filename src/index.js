const View = require('./ttt-view')// require appropriate file
const Game = require('../ttt_node/game')// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const element = document.getElementsByClassName("ttt")[0];
  const game = new Game();
  const view = new View(game, element);
});
