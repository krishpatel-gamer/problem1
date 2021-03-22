const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var polygon, slingShot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(350,height,700,20);
   

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    

    box3 = new Box(600,240,70,70);
    box4 = new Box(600,240,70,70);
   

    box5 = new Box(810,160,70,70);
   
    polygon = new Polygon(200,50,60,60);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   

    box3.display();
    box4.display();

    box5.display();
    polygon.display();
    slingshot.display();    
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
