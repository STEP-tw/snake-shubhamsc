const Game = function(rows,cols){
  this.rows = rows;
  this.cols = cols;
  this.snake = {};
  this.food = {};
};

Game.prototype.addSnake = function(snake){
  this.snake = snake;
};

Game.prototype.addFood = function(food){
  this.food = food;
};

Game.prototype.createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();
  let snake=new Snake(head,body);
  this.addSnake(snake);
};

Game.prototype.createFood=function() {
  let food=generateRandomPosition(this.cols,this.rows);
  this.addFood(food);
};

Game.prototype.isOver = function(){
  let topLeft = new Position(0,0,'east');
  let bottomRight = new Position(this.cols,this.rows,'east');
  return this.snake.isHitOnWall(topLeft,bottomRight) || this.snake.isEatingItself();
};
