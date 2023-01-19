class Ball {

     constructor (x,y,width,height, angle) {

        var options = {
    
          density: 5,

          restitution: 0.8,

          isStatic: true
    
        }
    
        this.body = Bodies.rectangle(x, y, width, height, options);
        
        this.width = width;
        
        this.height = height;

        this.image = loadImage ('./images/Superhero-02.png');
        
         World.add(world, this.body);
    
      }
      

      display() { 
        
        var angle = this.body.angle;
         push(); 
         
         translate(this.body.position.x, this.body.position.y); 
         
         rotate(angle); 

         imageMode(CENTER);
         
         image(this.image,0,0, this.width, this.height); 
         
         pop(); 
        
      }

}