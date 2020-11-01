class Roof {

    constructor(x,y,width,height) {

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {

        var roof_position = this.body.position;
        rectMode(CENTER);
        fill("beige");
        rect(roof_position.x, roof_position.y, this.width, this.height);

      }
    
}