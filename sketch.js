const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingplatform;
var platform1, platform2,platform3;
var box1,box2,box3,box4,box5,box6;
var striker;
var slingshot;
var net;
var stand;
var score = 0;
var striker2;

function setup(){
    createCanvas(1400,675);
    engine = Engine.create();
    world = engine.world;
    ground = new StaticPlatform(width/2,660,width,30);
    ground2 = new StaticPlatform(width/2,650,width,30);
    slingplatform = new StaticPlatform(300,500,400,100);
    platform1 = new StaticPlatform(1000,height/4,200,30);
    platform2 = new StaticPlatform(1000,height/2,200,30);
    platform3 = new StaticPlatform(1000,height*3/4,200,30);
    stand = new StaticPlatform(300,415,40,75);
    box1 = new Box(950,120);
    box2 = new Box(1050,120);
    box3 = new Box(950,280);
    box4 = new Box(1050,280);
    box5 = new Box(950,450);
    box6 = new Box(1050,450);
    striker = new Striker(280,350);
    slingshot = new Slingshot(striker.body,{x:300,y:330});
    striker2 = new Striker2(220,300)
}

function draw(){
    Engine.update(engine);
    background(0);
    push();
    noStroke();
    ground2.display("#cccb3");
    ground.display("#000099");
    slingplatform.display("#990099");
    platform1.display("#4d0039");
    platform2.display("#4d0039");
    platform3.display("#4d0039");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    rectMode(CENTER);
    fill("#ff0000");
    rect(315,330,30,80);
    striker.display();
    striker2.display();
    stand.display("#ff0000");
    rect(275,330,30,80);
    slingshot.display();
    text("INSTRUCTIONS: DRAG THE MOUSE TO MOVE THE RED BOX. PRESS 1 TO ATTACH THE RED BOX AND PRESS 2 TO ATTACH THE WHITE BOX.",0,100);
    text("TIP: THE WHITE BOX IS HARD TO CONTROL BUT IT CAN DESTROY THE BLOCKS EASILY",0,150);
    text("TIP: THE RED BOX IS EASY TO CONTROL BUT IT CANNOT DESTROY THE BLOCKS EASILY",0,200);
    textSize(15);
    fill(255);
    text("Score : "+score*100,500,400);
    
}

function mouseDragged(){
    slingshot.drag();
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode == 49){
   slingshot.attach(striker.body);
}
if(keyCode == 50){
    slingshot.attach(striker2.body);
}
}