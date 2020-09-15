class Slingshot {
  constructor(bodyA,bodyB) {
    var options ={
     bodyA: bodyA,
     bodyB: bodyB,
     length: 10,
     stiffness: 0.04
    }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
  }
  display() {
   strokeWeight(4);
  line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
  }
}