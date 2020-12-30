class Bob{
    constructor(x,y,diameter){
        var options={
            //isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.body = Bodies.rectangle(x, y, diameter, diameter, options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill("lightgreen");
        ellipse(0,0,this.diameter, this.diameter);
        pop();
    }
}