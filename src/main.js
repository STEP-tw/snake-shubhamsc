let animator=undefined;

const animateSnake=function(game) {
  let oldHead=game.snake.getHead();
  let oldTail=game.snake.move();
  let head=game.snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(!game.inPlay()){
    showGameOver();
  }
  if(head.isSameCoordAs(game.food)) {
    game.snake.grow();
    createFood(game);
    drawFood(game.food);
  }
}

const changeSnakeDirection=function(snake) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const addKeyListener=function(snake) {
  let grid=document.getElementById("keys");
  grid.onkeyup=(()=>{changeSnakeDirection(snake)});
  grid.focus();
}

const showGameOver = function(){
  clearInterval(animator);
  document.getElementsByClassName('gameStatus')[0].style.visibility = 'visible';
  document.getElementById('restart').onclick = resetGame;
};

const resetGame = function(){
  window.location.reload();
};

const startGame=function() {
  let numberOfRows=60;
  let numberOfCols=120;
  let game=new Game(numberOfRows,numberOfCols);
  game.createSnake();
  drawGrids(game.rows,game.cols);
  drawSnake(game.snake);
  game.createFood();
  drawFood(game.food);
  addKeyListener(game.snake);
  animator=setInterval(()=>{animateSnake(game)},140);
}

window.onload=startGame;
