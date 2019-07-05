import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
const game = new FlappyBird(canvas);
document.addEventListener("DOMContentLoaded", function () {
    game.restart();
});
