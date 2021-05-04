class Bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0,
            density:0.2,
           restitution:1.2,
        }
      

        this.body=Bodies.circle(x,y,r/2,options);
        this.x=x;
        this.y=y;
        this.r=r/2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        //translate(pos.x,pos.y);
        //rotate (this.body.angle)
        fill ("magenta");

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r)
        pop ()
    }
}