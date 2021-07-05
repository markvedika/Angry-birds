class Bird {
    constructor (x,y) {
        var option = {
            restitution: 0.5,
            friction: 1.0,
            density: 1.5,
          }
            this.box=Bodies.rectangle(x,y,50,50, option);
            this.width=50;
            this.height=50;
            World.add(world,this.box);
            
    }
    display() {
        var pos=this.box.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}