// player 1, player 2
var players = [];

// size of grid unit in pixels
var scl = 10;

// game ending stuff
var gameOver = false;
var whichPlayerLost = 0;

function setup() {
 createCanvas(500, 500);
 // lower frame rate makes this game more fun
 frameRate(15);

 textAlign(CENTER, CENTER);
 textSize(50);

 // set up player objects ...

 // spawn player 1 top left
 players[0] = new Lightbike(0, 0);
 // start player 1 going right
 players[0].xspeed = 1;
 players[0].yspeed = 0;
 // red
 players[0].myColor = color(255, 0, 0);
 // make sure the player object knows which player it is
 players[0].playerID = 1;

 // spawn player 2 bottom right
 players[1] = new Lightbike(width - scl, height - scl);
 // start player 2 going left
 players[1].xspeed = -1;
 players[1].yspeed = 0;
 players[1].myColor = color(50, 50, 255);
 players[1].playerID = 2;

}

function draw() {
 background(120);

 if (!gameOver) {

 // run player 1 methods
 players[0].selfHit(); // did i hit myself?
 players[0].otherHit(1); // did i hit the other?
 players[0].update(); // move
 players[0].show(); // display

 // run player 2 methods
 players[1].selfHit();
 players[1].otherHit(0); // check if you hit player 0 (player 1)
 players[1].update();
 players[1].show();

 } else {
 // game is over, who lost?
 if (whichPlayerLost == 1) {
 fill(255, 255, 0);
 text("Player 2 is victorious!", width / 2, height / 2);
 } else {
 fill(255, 255, 0);
 text("Player 1 is victorious!", width / 2, height / 2);
 }
 }
}


function keyPressed() {
 // PLAYER 1
 // if you press up, then...
 if (keyCode === UP_ARROW) {
 // set xspeed to zero and yspeed to -1,
 // meaning move up to top of screen
 players[0].xspeed = 0;
 players[0].yspeed = -1;
 } else if (keyCode === DOWN_ARROW) {
 // down
 players[0].xspeed = 0;
 players[0].yspeed = 1;
 } else if (keyCode === RIGHT_ARROW) {
 // and so forth
 players[0].xspeed = 1;
 players[0].yspeed = 0;
 } else if (keyCode === LEFT_ARROW) {
 players[0].xspeed = -1;
 players[0].yspeed = 0;
 }

 // PLAYER 2
 if (keyCode == 87) {
 // up (w)
 players[1].xspeed = 0;
 players[1].yspeed = -1;
 } else if (keyCode == 83) {
 // down (s)
 players[1].xspeed = 0;
 players[1].yspeed = 1;
 } else if (keyCode == 68) {
 // right (d)
 players[1].xspeed = 1;
 players[1].yspeed = 0;
 } else if (keyCode == 65) {
 // left (a)
 players[1].xspeed = -1;
 players[1].yspeed = 0;
 }
}

// lightbike class

function Lightbike(spawnX, spawnY) {
 this.x = spawnX; // where am i?
 this.y = spawnY;
 this.xspeed = 0; // what is my speed? ie, direction
 this.yspeed = 0;
 this.total = 0; // how many segments do i have?
 this.trail = []; // keep track of all my segments

 this.myColor = color(255); // what color am i?
 this.playerID; // which player am i?

 // did i hit my own trail, should i be dead?
 this.selfHit = function() {
 // run thru all my segments, DID I KILL MYSELF?
 for (var i = 0; i < this.trail.length; i++) {
 // trail[] is a vector, meaning a variable type
 // with an x and a y

 // were checking the vector for each trail segment
 var pos = this.trail[i];

 // am i on top of another segment?
 var d = dist(this.x, this.y, pos.x, pos.y);
 if (d < 1) {
 // if so, player 2 wins.
 gameOver = true;
 whichPlayerLost = this.playerID;
 }
 }
 }

 this.otherHit = function(otherID) {
 // run thru all other player segments, DID THEY KILL ME?
 for (var i = 0; i < players[otherID].trail.length; i++) {

 var tailPos = players[otherID].trail[i];

 // am i on top of another segment?
 var d = dist(tailPos.x, tailPos.y, this.x, this.y);

 if (d < 1) {
 // if so, player 2 wins.
 gameOver = true;
 whichPlayerLost = this.playerID;
 }
 }
 }

 this.update = function() {
 // every frame add a new trail part
 this.total++;

 // you need to constantly move old trail parts to the back
 // of the array
 if (this.total === this.trail.length) {
 for (var i = 0; i < this.trail.length - 1; i++) {
 this.trail[i] = this.trail[i + 1];
 }
 }
 this.trail[this.total - 1] = createVector(this.x, this.y);

 // move along the grid
 this.x = this.x + this.xspeed * scl;
 this.y = this.y + this.yspeed * scl;

 // stay in bounds
 this.x = constrain(this.x, 0, width - scl);
 this.y = constrain(this.y, 0, height - scl);
 }

 this.show = function() {
 fill(this.myColor);
 noStroke();
 // draw each segment of trail
 for (var i = 0; i < this.trail.length; i++) {
 rect(this.trail[i].x, this.trail[i].y, scl, scl);
 }
 rect(this.x, this.y, scl, scl);
 }
}
