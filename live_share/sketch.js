let xPos, yPos;

let balls = [];
let score = 0;
let roundPoints = 5;
let ballSpawnTime = 0;
let ballVisible = true;
function setup() {

    createCanvas(500,500);
    
    noStroke();
    spawnBalls();
    background(0);
        

}

function draw() {
    
    
    // text for the score which counts the points of clicked balls
    fill(255);
    textSize(20);
    text("Score: " + score, 25,50);

   
    //spawns spheres in random positions
    //returns numbers of milliseconds = millis()
    if(ballVisible && millis() - ballSpawnTime <= 3000) 
    {
        
        xPos = random(25,475);
        yPos = random(25,475);
          
       
        fill(0,255,0);

        ellipse(xPos, yPos, 50, 50);
     
    }
    else
    {
        ballVisible = false;
    }

    if(!ballVisible && millis() - ballSpawnTime >= 2000) {

        spawnBalls();
    }
}
function spawnBalls(){
        
        background(0);
        balls = [];
        xPos = random(25, 475);
        yPos = random(25, 475);
        ballSpawnTime = millis();
        ballVisible = true;

        for (let i = 0; i < roundPoints; i++){
            let newBall = [
              random(25,475),
              random(25,475),
              50
              
            ]

            balls.push(newBall);
            
        }
        

        fill(0, 255, 0);
        for (let i = 0; i < balls.length; i++) {
            ellipse(balls[i][0], balls[i][1], balls[i][2], balls[i][2]);
        }
}



function mouseClicked(){
    
    if(mouseX <= xPos + 25 && mouseY <= yPos + 25 && mouseX >= xPos - 25 && mouseY >= yPos - 25)
    {
        //this should place a black circle on the clicked position, deleting it while adding a score
        fill(0);
        ellipse(xPos, yPos, 50, 50);
        xPos = random(25,475);
        yPos = random(25,475);
        score += 1
        

        if(score % 5 == 0 && roundPoints < 20) {
            roundPoints += 5; // increase rounds every 5 points
        }


        spawnBalls();
    }
    

    

    

    

    


    
}