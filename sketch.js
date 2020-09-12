var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogimg,happydogimg;

function preload(){
  createCanvas(500,500);
  dogimg=loadImage("images/Dog.png");
  happydogimg=loadImage("images/happydog.png");
  

  
  
}

function setup() {
  createCanvas(800, 700);
  var foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background("46,139,87");
  if(keyDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
    ;
  }

  drawSprite()
  textSize(40);
  fill(red)
}



