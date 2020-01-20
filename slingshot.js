class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.3,
            'length': 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    drag(){
         this.sling.bodyA.position.x = mouseX;
         this.sling.bodyA.position.y = mouseY;
    }
    
    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("#000099");
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
    }
    }
}