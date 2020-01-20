class Striker extends ParentClass{
    constructor(x,y){
       super(x,y,50,50);
    }
}

class Striker2{
    constructor(x,y){
        var options = {
            'mass':2.0,
            'density':2.0,
            'restitution' :1.0,
            'friction': Infinity
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display(){
        fill(255);
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill(color);
        rect(0,0,50,50);
        pop();
    }
    }