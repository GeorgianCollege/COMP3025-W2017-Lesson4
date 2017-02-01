/* core game script */

// IIFE - Immediately Invoked Function Expression

(function(){
// CreateJS Variables
let canvas:HTMLElement;
let stage:createjs.Stage;

// Game Variables
let helloLabel:createjs.Text;

function Start():void {
  canvas = document.getElementById("canvas"); // get ref to canvas element
  stage = new createjs.Stage(canvas); // creating a new Stage Object
  createjs.Ticker.framerate = 60; // set fps to 60
  createjs.Ticker.on("tick", Update); // calls the Update function every framerate

  Game();
}

function Update(event:createjs.Event):void {

    helloLabel.rotation += 5; // rotate clockwise 5 degrees every frame

    stage.update(); // manually redraws the stage
}

function Game():void {
  console.log("Game Started...");

  helloLabel = new createjs.Text("Hello, World!", "40px Consolas", "#000000");
  helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
  helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
  helloLabel.x = 160;
  helloLabel.y = 240;
  stage.addChild(helloLabel);
}

window.onload = Start; // calls the Start function when the window finishes loading

})();
