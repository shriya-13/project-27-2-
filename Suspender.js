class Suspender{
    constructor(bodyA,pointB){
       // this.offsetX=offsetX
        //this.offsetY=offsetY
        var options={
        bodyA:bodyA,
        pointB:pointB,
      // pointB:{x:this.offsetX,y:this.offsetY}
      stiffness:0.4
       
        }
        this.pointB=pointB;
        this.Suspender = Constraint.create(options);
        World.add(world, this.Suspender);
        }
        display(){
            var pointA= this.Suspender.bodyA.position;
            var pointB= this.pointB;

            stroke("black");
            strokeWeight (4)
          //  var Anchor1X = pointA.x
          //  var Anchor1Y = pointA.y
            
           // var Anchor2X = pointB.x+this.offsetX
           // var Anchor2Y = pointB.y+this.offsetY
            line (pointA.x,pointA.y, pointB.x, pointB.y);
        }
        
}