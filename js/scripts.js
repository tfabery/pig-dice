// back-end logic
var player1 = new Player(1, 0, 0);
var player2 = new Player(2, 0, 0);
var currentPlayer = player1;

Player.prototype.rollDice = function (){
  var subScore=  Math.floor(Math.random()*(6)+1);
  this.score += subScore;
  $("#dice").text(subScore);
  $("#score").text(currentPlayer.score);
  this.winCheck();
  if(subScore === 1){
    this.score = 0;
    this.passTurn();
  }
};

Player.prototype.passTurn = function () {
  this.tally += this.score;
  if (this.num === 1){
    $('#player' + this.num + 'Tally').text(this.tally);
    this.score = 0;
    currentPlayer = player2;
   }
  else if (this.num === 2) {
    $('#player' + this.num + 'Tally').text(this.tally);
    this.score = 0;
    currentPlayer = player1;
  }
};

function Player(num, score, tally){
  this.num = num;
  this.score = score;
  this.tally = tally;
};

Player.prototype.winCheck = function (){
  if ((this.score + this.tally) >= 100){
    alert('Player' + this.num + " wins!!");
  }
};
// front-end logic
$(function(){
  $("#roll").click(function(){
    currentPlayer.rollDice();
  });

  $("#pass").click(function(){
    currentPlayer.passTurn();
  });
});
