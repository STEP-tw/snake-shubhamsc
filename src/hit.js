const getPosition = function(direction){
  let startPos = 0;
  let headWidth = 1;
  let pos = {
    east:numberOfCols-headWidth,
    west:startPos,
    north:startPos,
    south:numberOfRows-headWidth
  }
  return pos[direction];
};


const checkForGameOver = function(head,oldTail){
  console.log(snake.head,snake.body);
  let position = getPosition(head.direction);
  if(head.isHitOnWall(position))
  showGameOver();
}

const showGameOver = function(){
  clearInterval(animator);
  document.getElementsByClassName('gameStatus')[0].style.visibility = 'visible';
  document.getElementById('restart').onclick = resetGame;
};

const resetGame = function(){
  startGame();
};
