
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(950,200,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(1080,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(240,400,50)	
	sling = new Slingshot(stone.body,{x:240,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display()
  sling.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}
function keyPressed(){
	if (keyCode===32){
	Matter.Body.setPosition(stone.body,{x:230,y:420})
	sling.attach(stone.body)
}}

function detectCollision(body1,body2){
	body1Pos = body1.body.position;
	body2Pos = body2.body.position;

	var distance = dist(body1Pos.x,body1Pos.y,body2Pos.x,body2Pos.y)
	if (distance<=body1.r+body2.r){
		Matter.Body.setStatic(body2.body,false)
	}
}
