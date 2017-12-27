const Game = function(numberOfRows,numberOfCols){
  this.rows = numberOfRows;
  this.cols = numberOfCols;
  this.snake = {};
  this.food = {};
};

Game.prototype.addSnake = function(snake){
  this.snake = snake;
};

Game.prototype.addFood = function(food){
  this.food = food;
};

Game.prototype.inPlay = function(){
  let head = this.snake.head;
  let headWidth = 1;
  let topLeft = new Position(0,0,'east');
  let bottomRight = new Position(this.cols,this.rows,'east');
  return head.isSnakeInRange(topLeft,bottomRight,headWidth);
};
