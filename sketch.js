var gameState=0;
var playerCount;
var database;
var player,game,form;


function setup(){
  database = firebase.database()
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){

}

