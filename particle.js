class Particle{
    constructor(x,y){
        var options={
        isStatic: false,
        'density':1.0
        }
        this.body =Bodies.circle(x,y, this.r,options);
        this.r=r;
        World.add(world, this.body);
        
    }
    display(){
        this.color = color(random(0,255),random(0,255),random(0,255));
    }
}