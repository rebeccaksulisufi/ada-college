var grinning, relieved, sweat, tongue;

var topWall, rightWall, leftWall, bottomWall;

var goal1, goal2, goal3, goal4;

var score1 = 10;
var score2 = 10;
var score3 = 10;
var score4 = 10;
var menuScreen = 1;
var selectionScreen = 1;
var inGame = 1;

function players(){
    
    grinning = createSprite(400, 150);       
    grinning.addImage(loadImage("grinning.png"));
    grinning.setCollider("circle", 0,0,45);
    grinning.scale = 0.8;
    grinning.mass = grinning.scale;
    sprites.add(grinning);
    
    relieved = createSprite(400,650);
    relieved.addImage(loadImage("relieved.png"));
    relieved.setCollider("circle", 0,0,45);
    relieved.scale = 0.8;
    relieved.mass = grinning.scale;
    sprites.add(relieved);
    
    sweat = createSprite(150,400);
    sweat.addImage(loadImage("sweat.png"));
    sweat.setCollider("circle", 0,0,45);
    sweat.scale = 0.8;
    sweat.mass = grinning.scale;
    sprites.add(sweat);
    
    tongue = createSprite(650,400);
    tongue.addImage(loadImage("tongue.png"));
    tongue.setCollider("circle", 0,0,45);
    tongue.scale = 0.8;
    tongue.mass = grinning.scale;
    sprites.add(tongue);
    
    ball = createSprite(400,400);
    ball.addImage(loadImage("ball.png"));
    ball.immovable = false;
    ball.setCollider("circle",0,0,30);
    theBall.add(ball);
    
    }

function WALLS(){
    topWall = createSprite(400,12.5);
    topWall.addImage(loadImage("xWall.png"));
    topWall.immovable = true;
    walls.add(topWall);
    
    bottomWall = createSprite(400,800-12.5);
    bottomWall.addImage(loadImage("xWall.png"));
    bottomWall.immovable = true;
    walls.add(bottomWall);
   
    rightWall = createSprite(12.5,400);
    rightWall.addImage(loadImage("yWall.png"));
    rightWall.immovable = true;
    walls.add(rightWall);

    leftWall = createSprite(800-12.5,400);
    leftWall.addImage(loadImage("yWall.png"));
    leftWall.immovable = true;
    walls.add(leftWall);
}

function GOALS(){
    goal1 = createSprite(400,75);
    goal1.addImage(loadImage("goal1.png"));
    goal1.immovable = true;
    goals.add(goal1);
    
    goal2 = createSprite(400,725);
    goal2.addImage(loadImage("goal2.png"));
    goal2.immovable = true;
    goals.add(goal2);
    
    goal3 = createSprite(75,400);
    goal3.addImage(loadImage("goal3.png"));
    goal3.immovable = true;
    goals.add(goal3);
    
    goal4 = createSprite(725,400);
    goal4.addImage(loadImage("goal4.png"));
    goal4.immovable = true;
    goals.add(goal4);
}

function MISC(){
    goal1Score = createSprite(350,45);
    goal1Score.addImage(loadImage("scores/10.png"));
    goal2Score = createSprite(450,755);
    goal2Score.addImage(loadImage("scores/10.png"));
    goal3Score = createSprite(45,350);
    goal3Score.addImage(loadImage("scores/10.png"));
    goal4Score = createSprite(755,450);
    goal4Score.addImage(loadImage("scores/10.png"));
    
    arrowsSprite = createSprite(575,75);
    arrowsSprite.addImage(loadImage("scores/arrows.png"));
    
    wasdSprite = createSprite(715,585);
    wasdSprite.addImage(loadImage("scores/wasd.png"));
    
    gvbnSprite = createSprite(90,215);
    gvbnSprite.addImage(loadImage("scores/gvbn.png"));
    
    ijklSprite = createSprite(230,715);
    ijklSprite.addImage(loadImage("scores/ijkl.png"));
}

function mousePressed(){
    var d1 = dist(mouseX, mouseY, 345, 685);
    var d2 = dist(mouseX, mouseY, 445, 685);
    if (d1 < 25){
        setup()
        draw()
        score1 = 10;
        score2 = 10;
        score3 = 10;
        score4 = 10;
        goal1Score.addImage(loadImage("scores/10.png"));
        goal2Score.addImage(loadImage("scores/10.png"));
        goal3Score.addImage(loadImage("scores/10.png"));
        goal4Score.addImage(loadImage("scores/10.png"));
        gameOver.remove();
        restart.remove();  
    }
    else if (d2 < 25){
        createCanvas(0,0);
    }    
}
    
function addScores(SpriteA, score){
    console.log("working?");
    SpriteA.addAnimation("0", "scores/0.png");
    SpriteA.addAnimation("1", "scores/1.png");
    SpriteA.addAnimation("2", "scores/2.png");
    SpriteA.addAnimation("3", "scores/3.png");
    SpriteA.addAnimation("4", "scores/4.png");
    SpriteA.addAnimation("5", "scores/5.png");
    SpriteA.addAnimation("6", "scores/6.png");
    SpriteA.addAnimation("7", "scores/7.png");
    SpriteA.addAnimation("8", "scores/8.png");
    SpriteA.addAnimation("9", "scores/9.png");
    SpriteA.addAnimation("10", "scores/10.png");
    
    if (score == 0){
        restart = createSprite(400,650);
        restart.addImage(loadImage("scores/restart.png"));
        grinning.remove();
        relieved.remove(); 
        sweat.remove();
        tongue.remove();
        ball.remove();
        goal1.remove();
        goal2.remove();
        goal3.remove();
        goal4.remove();
        arrowsSprite.remove();
        wasdSprite.remove();
        ijklSprite.remove();
        gvbnSprite.remove();
        goal1Score.remove();
        goal2Score.remove();
        goal3Score.remove();
        goal4Score.remove();
        SpriteA.changeAnimation("0");
        gameOver = createSprite(400,400);
        gameOver.addImage(loadImage("scores/gameover.png"));

    }

    else if (score == 1){
        SpriteA.changeAnimation("1");
        console.log("yes");
    }
    else if (score == 2){
        SpriteA.changeAnimation("2");
        console.log("yes");
    }
    else if (score == 3){
        SpriteA.changeAnimation("3");
    }
    else if (score == 4){
        SpriteA.changeAnimation("4");
    }
    else if (score == 5){
        SpriteA.changeAnimation("5");
    }
    else if (score == 6){
        SpriteA.changeAnimation("6");
    }
    else if (score == 7){
        SpriteA.changeAnimation("7");
    }
    else if (score == 8){
        SpriteA.changeAnimation("8");
    }
    else if (score == 9){
        SpriteA.changeAnimation("9");
    }
    else if (score == 10){
        SpriteA.changeAnimation("10");

    }
}

function setup() {
    createCanvas(800,800);
    
    /* MENU */
    
    
    sprites = new Group();
    theBall = new Group();
    ballScore = new Group();
    walls = new Group();
    goals = new Group();
    
    players()
    WALLS()
    GOALS()
    MISC()
}

function goalFunc1(spriteA, spriteB){
    grinning.remove();
    relieved.remove();
    sweat.remove();
    tongue.remove();
    ball.remove();
    players();
    score1--;
    addScores(goal1Score, score1);
    console.log(score1);
}
    
function goalFunc2(spriteA, spriteB){
    grinning.remove();
    relieved.remove();
    sweat.remove();
    tongue.remove();
    ball.remove();
    players();
    score2--;
    addScores(goal2Score, score2);
    console.log(score2);
}
    
function goalFunc3(spriteA, spriteB){
    grinning.remove();
    relieved.remove();
    sweat.remove();
    tongue.remove();
    ball.remove();
    players();
    score3--;
    addScores(goal3Score, score3);
    console.log(score3);
}
    
function goalFunc4(spriteA, spriteB){
    grinning.remove();
    relieved.remove();
    sweat.remove();
    tongue.remove();
    ball.remove();
    players();
    score4--;
    addScores(goal4Score, score4);
    console.log(score4);

}

function draw() {
    background(0,0,0);
    drawSprites();
    
    sprites.bounce(sprites);
    sprites.bounce(walls);
    sprites.bounce(goals);
    sprites.bounce(theBall);
    theBall.bounce(walls);
        
    goal1.displace(ball, goalFunc1);
    goal2.displace(ball, goalFunc2);
    goal3.displace(ball, goalFunc3);
    goal4.displace(ball, goalFunc4);  
    

    
}

function keyPressed(event) {
    
    /* ARROW KEYS */
    
    if (keyCode == RIGHT_ARROW){
        grinning.setSpeed(10, 0);
        if (map1[40] == true){
            grinning.setSpeed(10,45);
        }
        else if (map1[38] == true){
            grinning.setSpeed(10,315);
        }
        else if (map1[37] == true){
            grinning.setSpeed(10,0);
        }
        
    }
    else if (keyCode == DOWN_ARROW) {
        grinning.setSpeed(10, 90);
        if (map1[39] == true){
            grinning.setSpeed(10,45);
        }
        else if (map1[37] == true){
            grinning.setSpeed(10,135);
        }
    } 
    else if (keyCode == LEFT_ARROW) {
        grinning.setSpeed(10, 180);
        if (map1[40] == true){
            grinning.setSpeed(10,135);
        }
        else if (map1[38] == true){
            grinning.setSpeed(10,225);
        }
        else if (map1[39] == true){
            grinning.setSpeed(10,180);
        }
    }
    else if (keyCode == UP_ARROW) {
        grinning.setSpeed(10, 270);
        if (map1[39] == true){
            grinning.setSpeed(10,315);
        }
        else if (map1[37] == true){
            grinning.setSpeed(10,225);
        }
    }
    
    /* WASD */
        
    else if (event.keyCode == 68){
        tongue.setSpeed(10, 0);
        if (map1[83] == true){
            tongue.setSpeed(10,45);
        }
        else if (map1[87] == true){
            tongue.setSpeed(10,315);
        }
        else if (map1[65] == true){
            tongue.setSpeed(10,0);
        }
        
    }
    else if (event.keyCode == 83) {
        tongue.setSpeed(10, 90);
        if (map1[68] == true){
            tongue.setSpeed(10,45);
        }
        else if (map1[65] == true){
            tongue.setSpeed(10,135);
        }
    } 
    else if (event.keyCode == 65) {
        tongue.setSpeed(10, 180);
        if (map1[83] == true){
            tongue.setSpeed(10,135);
        }
        else if (map1[87] == true){
            tongue.setSpeed(10,225);
        }
        else if (map1[68] == true){
            tongue.setSpeed(10,180);
        }
    }
    else if (event.keyCode == 87) {
        tongue.setSpeed(10, 270);
        if (map1[68] == true){
            tongue.setSpeed(10,315);
        }
        else if (map1[65] == true){
            tongue.setSpeed(10,225);
        }
    }
    
    /* GVBN */
    
    else if (event.keyCode == 78){
        sweat.setSpeed(10, 0);
        if (map1[66] == true){
            sweat.setSpeed(10,45);
        }
        else if (map1[71] == true){
            sweat.setSpeed(10,315);
        }
        else if (map1[86] == true){
            sweat.setSpeed(10,0);
        }
        
    }
    else if (event.keyCode == 66) {
        sweat.setSpeed(10, 90);
        if (map1[78] == true){
            sweat.setSpeed(10,45);
        }
        else if (map1[86] == true){
            sweat.setSpeed(10,135);
        }
    } 
    else if (event.keyCode == 86) {
        sweat.setSpeed(10, 180);
        if (map1[66] == true){
            sweat.setSpeed(10,135);
        }
        else if (map1[71] == true){
            sweat.setSpeed(10,225);
        }
        else if (map1[78] == true){
            sweat.setSpeed(10,180);
        }
    }
    else if (event.keyCode == 71) {
        sweat.setSpeed(10, 270);
        if (map1[78] == true){
            sweat.setSpeed(10,315);
        }
        else if (map1[86] == true){
            sweat.setSpeed(10,225);
        }
    }
    /* IJKL */
    
    else if (event.keyCode == 76){
        relieved.setSpeed(10, 0);
        if (map1[75] == true){
            relieved.setSpeed(10,45);
        }
        else if (map1[73] == true){
            relieved.setSpeed(10,315);
        }
        else if (map1[74] == true){
            relieved.setSpeed(10,0);
        }
        
    }
    else if (event.keyCode == 75) {
        relieved.setSpeed(10, 90);
        if (map1[76] == true){
            relieved.setSpeed(10,45);
        }
        else if (map1[74] == true){
            relieved.setSpeed(10,135);
        }
    }  
    else if (event.keyCode == 74) {
        relieved.setSpeed(10, 180);
        if (map1[75] == true){
            relieved.setSpeed(10,135);
        }
        else if (map1[73] == true){
            relieved.setSpeed(10,225);
        }
        else if (map1[76] == true){
            relieved.setSpeed(10,180);
        }
    }
    else if (event.keyCode == 73) {
        relieved.setSpeed(10, 270);
        if (map1[76] == true){
            relieved.setSpeed(10,315);
        }
        else if (map1[74] == true){
            relieved.setSpeed(10,225);
        }
    }

    return false;  
}

function keyReleased(){
    grinning.setSpeed(0,0);
    tongue.setSpeed(0,0);
    sweat.setSpeed(0,0);
    relieved.setSpeed(0,0);
}

var map1 = {};
onkeydown = onkeyup = function(e){
    map1[e.keyCode] = e.type == 'keydown';
    console.log(e);
    console.log(map1);
    
}

