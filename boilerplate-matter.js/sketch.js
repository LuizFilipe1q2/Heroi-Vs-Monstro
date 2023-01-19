const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var chao
var caixa, caixa2, caixa3, caixa4, caixa5
var bola
var corda
var monster, monster2
var fundo

function preload() {

   monster = loadImage('./images/Monster-01.png');

   fundo = loadImage('./images/GamingBackground.png');

}



function setup() {
  var canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  chao = new Ground (1500,780,3000, 20);

  caixa = new Box (2000,100,70,70);
  caixa2 = new Box (2000,100,70,70);
  caixa3 = new Box (2000,100,70,70);
  caixa4 = new Box (2000,100,70,70);
  caixa5= new Box (2000,100,70,70);

  bola = new Ball (200,200,400,300);

  var options = {

    density: 0.04,
        
    friction: 1.0,

    restitution: 0.8,

    

  }

 monster2 = Matter.Bodies.rectangle(2200,100,400,400,options)

 World.add(world,monster2)

  //corda = new Rope (bola.body,{x:1300,y:150});
}


function draw() {
  background(fundo);
  Engine.update(engine);

  caixa.display ();

  caixa2.display ();

  caixa3.display ();

  caixa4.display ();

  caixa5.display ();

  bola.display ();

  push();
  image(monster,monster2.position.x,monster2.position.y,400,400)
  pop();

  chao.display ();


  //corda.display();
}

function mouseDragged () {

  Matter.Body.setPosition (bola.body,{x: mouseX, y: mouseY});

  bola.fly();


}
