class Box {
    constructor (x,y,width,height) {
        var option = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0,
          }
            this.box=Bodies.rectangle(x,y,width,height, option);
            this.width=width;
            this.height=height;
            World.add(world,this.box);
            
    }
    display() {
        var pos=this.box.position;
        var angle=this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        rect(0,0, this.width, this.height);
        pop();
    }
}