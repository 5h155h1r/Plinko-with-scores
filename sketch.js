var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState;

var particle;
var turn = 0; 

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  fill("white");
  text("Score: " + score, 650, 50)
  text('600', 25, 500)
  text('500', 105, 500)
  text('400', 190, 500)
  text('300', 265, 500)
  text('200', 345, 500)
  text('100', 425, 500)
  text('200', 505, 500)
  text('300', 585, 500)
  text('400', 665, 500)
  text('500', 745, 500)
 

  //particle display and score
  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x <= 25){
          score+=600
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x <= 105 && particle.body.position.x> 25){
          score+=500
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }
   

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 105 && particle.body.position.x < 190){
          score+=400
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 190 && particle.body.position.x < 265){
          score+=300
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 265 && particle.body.position.x < 345){
          score+=200
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 345 && particle.body.position.x < 425){
          score+=100
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 425 && particle.body.position.x < 505){
          score+=200
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 505 && particle.body.position.x < 585){
          score+=300
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 585 && particle.body.position.x < 665){
          score+=400
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 665 && particle.body.position.x < 745){
          score+=500
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }

  if(particle != null){
    particle.display();
      if(particle.body.position.y > 600){
        if(particle.body.position.x > 745){
          score+=600
          particle = null;
          if (turn >= 5){
            gameState = "end"
          }
        }
      }
  }
   
  //end of particle displaay and score
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   for (var i = 0; i < plinkos.length; i++) {    
    plinkos[i].display();  
}

if (gameState === "end"){
  textSize(50)
  text("Game Over", 300, 350)
} 

}

function mousePressed(){
  if(gameState!== "end"){
    turn ++;
    particle = new Particle(mouseX, 10, 10, 10)
  }
}