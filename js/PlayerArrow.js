class PlayerArrow {
  constructor(x, y) {
    var options = {
      isStatic: true,
      
    };
    this.width = 150;
    this.height = 10;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    
    World.add(world, this.body);
  }
  
  //create a shoot function
  shoot(archerAngle){

    archerAngle +=90;
    var newAngle = newAngle *(3.14/180);
    this.velocity = p5.Vector.fromAngle(newAngle);
    console.log();
    this.velocity.mult(1);
    Matter.Body.setVelocity(this.body, {
      x: this.velocity.x *(180/3.14),
       y: this.velocity.y * (180/3.14)
      });
      Matter.Body.setStatic(this.body, false);
  }
 

  display() {
  
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
