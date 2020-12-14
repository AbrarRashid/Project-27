class Bob{
    constructor(x, y){
       var options ={
            restitution: 0.3,
            friction: 0.3,
            density: 1.2
            
        }
        this.bob = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.bob);
    }
    display(){
       var pos = this.bob.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}