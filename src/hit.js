const getPosition = function(direction){
  let initPos = 0;
  let headWidth = 1;
  let pos = {
    east:numberOfCols-headWidth,
    west:initPos,
    north:initPos,
    south:numberOfRows-headWidth
  }
  return pos[direction];
};

const isSnakeHitOnBody = function(head,body){
  return body.some((pos)=>{
    return pos.x == head.x && pos.y == head.y;
  });
};


const checkForGameOver = function(){
  let body = snake.getBody();
  let head = snake.getHead();
  let position = getPosition(head.direction);
  if(head.isHitOnWall(position) || isSnakeHitOnBody(head,body))
  showGameOver();
};

const showGameOver = function(){
  clearInterval(animator);
  document.getElementsByClassName('gameStatus')[0].style.visibility = 'visible';
  document.getElementById('restart').onclick = resetGame;
};

const resetGame = function(){
  // window.location.reload();
  startGame(); 
};
