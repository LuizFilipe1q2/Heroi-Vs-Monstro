class Box {

    constructor (x,y,width,height,image) {

        var options = {
    
          density: 0.04,
        
          friction: 1.0,

          restitution: 0.8,
    
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        this.width = width;
        
        this.height = height;

        this.image = image;
        
         World.add(world, this.body);
    
      }

      display() { 
        
        var pos = this.body.position;
        
        var angle = this.body.angle; 
        push(); 
        
        translate(pos.x, pos.y);
        
        rotate(angle);
        
        rectMode(CENTER); 
        
        strokeWeight(4);
        
        stroke("green");
        
        fill(255);
        
        rect(0,0, this.width, this. height,this.image,this.image); 
        
        pop(); 
    
    }

}