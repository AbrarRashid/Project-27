class Slingshot{
    constructor(bodyX, bodyY, coordinate){
        var options ={
            bodyA: bodyX,
            bodyB: bodyY,
            pointB: coordinate
        }
        
        this.sling = Matter.Constraint.create(options);
        this.coordinate = coordinate
        World.add(world, this.sling)
    }
    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            var anchor2X = pointB.x + this.coordinate.x;
            var anchor2Y = pointB.y + this.coordinate.y;
            strokeWeight(4)
            line(pointA.x, pointA.y, anchor2X, anchor2Y);
        }
}
