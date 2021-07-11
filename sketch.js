const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies;
 var myWorld,myEngine;
  var ground;
  var ball;
   function setup()
   
   { 
     myEngine = Engine.create(); 
  myWorld = myEngine.world; 
  var canvas=createCanvas(500,500);
   var option={ isStatic:true }
    ground=Bodies.rectangle(250,470,500,25,option);
    World.add(myWorld,ground);
    var option1={
      restitution:4
    }
    ball=Bodies.rectangle(250,250,20,20,option1);
    World.add(myWorld,ball);
   }
     function draw()
      { 
        background("black");
      Engine.update(myEngine);
      rectMode(CENTER); 
      rect(ground.position.x,ground.position.y,500,25);
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,20,20);
     }