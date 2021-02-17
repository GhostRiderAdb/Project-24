class Paper{
    constructor(posx,posy,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,

        }
        this.body = Bodies.circle(posx,posy,radius,options);
        World.add(world,this.body)
        this.radius = radius
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius)
    }
}
    
    
