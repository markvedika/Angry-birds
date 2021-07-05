class Ground {
    constructor(x,y,width,height) {
        var ground_option = {
            isStatic: true
        }
    this.ground=Bodies.rectangle(x,y,width,height,ground_option);
    this.width=width;
    this.height=height;
     World.add(world,this.ground);
    }
    display() {
        var pos=this.ground.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}