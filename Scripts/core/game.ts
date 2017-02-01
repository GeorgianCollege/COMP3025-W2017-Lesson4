/* core game script */
/// <reference path="./_reference.ts"/>


// IIFE - Immediately Invoked Function Expression

(function(){
// CreateJS Variables
let canvas:HTMLElement;
let stage:createjs.Stage;

// Game Variables
let helloLabel:objects.Label;
let clickMeButton:objects.Button;

function Start():void {
  canvas = document.getElementById("canvas"); // get ref to canvas element
  stage = new createjs.Stage(canvas); // creating a new Stage Object
  stage.enableMouseOver(20); // enable mouse over events every 20 frames
  createjs.Ticker.framerate = 60; // set fps to 60
  createjs.Ticker.on("tick", Update); // calls the Update function every framerate

  Game();
}

function Update(event:createjs.Event):void {

    stage.update(); // manually redraws the stage
}

function Game():void {
  console.log("Game Started...");

  // add helloLabel to the stage
  helloLabel = new objects.Label("Hello, World!", "40px Consolas", "#000000", 160, 240, true);
  stage.addChild(helloLabel);

  // add clickMe Button to the stage
  clickMeButton = new objects.Button("../../Assets/images/ClickMeButton.png", 160, 300, true);
  stage.addChild(clickMeButton);

  // register an event listener with an anonymous event handler inline
  clickMeButton.on("click", (event:createjs.MouseEvent) => {
    helloLabel.text = "Good Bye!";
  });

}

window.onload = Start; // calls the Start function when the window finishes loading

})();
