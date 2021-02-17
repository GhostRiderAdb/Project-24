class Ground{
    constructor(posx,posy,widthyboy,heightyboy){
        this.body = Bodies.rectangle(posx,posy,widthyboy,heightyboy,{isStatic:true});
        this.widthyboy = widthyboy;
        this.heightyboy = heightyboy;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("brown")
        rect(pos.x, pos.y, this.widthyboy, this.heightyboy);

    }
}
