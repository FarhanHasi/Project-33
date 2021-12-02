class PlayerArcher {
  constructor(x, y, width, height,angle) {
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.archer_image = loadImage("./assets/playerArcher.png");
    
    this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
    World.add(world,this.body);
    Matter.Body.setAngle(this.body,-90);
  }

  display() {
    
    
    if (keyIsDown(DOWN_ARROW) && this.angle < -70 ) {
      this.angle += 1;
      }

    if (keyIsDown(UP_ARROW) && this.angle > -100) {
      this.angle -=1;
      }

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.archer_image, 0, 0, this.width, this.height);
    pop();
    //image(this.player_archer,width-1650,height-750,150,150);
    noFill();
  }
}
