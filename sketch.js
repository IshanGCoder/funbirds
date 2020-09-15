const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, backImage;
var chain;

function preload() {
backImage = loadImage("sprites/bg.png");  
}

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,640,1200,20);
    ground1 = new Ground(150,555,300,170);
    box1 = new Box(700,570,70,70);
    box2 = new Box(920,570,70,70);
    box3 = new Box(700,490,70,70);
    box4 = new Box(920,490,70,70);
    pig1 = new Pig(810,600);
    pig2 = new Pig(810,440);
    log1 = new Log(810,510,300,PI/2);
    log2 = new Log(810,430,300,PI/2);
    log3 = new Log(760,370,150,PI/7);
    log4 = new Log(870,410,150,-PI/7);
    box5 = new Box(810,410,70,70);
    bird1 = new Bird(100,350);
    log5 = new Log(200,200,100,PI/2);
    sling = new Slingshot(bird1.body,log5.body);
}

function draw(){
    background(backImage);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    box5.display();
    bird1.display();
    sling.display();
   
}