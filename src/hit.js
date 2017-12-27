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

// const isHeadHitOnBody = function(head,body){
//   return body.some((pos)=>{
//     return pos.x == head.x && pos.y == head.y;
//   });
// };

const isHeadHitOnWall=function(head,wallPos){
  return head.x==wallPos || head.y==wallPos;
};

const checkForGameOver = function(){
  let body = snake.getBody();
  let head = snake.getHead();
  let position = getPosition(head.direction);
  if(isHeadHitOnWall(head,position) || snake.isSnakeEatingItself())
  showGameOver();
};

const showGameOver = function(){
  clearInterval(animator);
  document.getElementsByClassName('gameStatus')[0].style.visibility = 'visible';
  document.getElementById('restart').onclick = resetGame;
};

const resetGame = function(){
  window.location.reload();
  // startGame();
};
