class snowFall {
        constructor(x,y,w,h){
            var options={
            restitution:0.4
            }
            this.w=w;
            this.h=h;
            this.body = Bodies.rectangle(x,y,this.w,this.h,options);
            //this.color=color(random(0,255),random(0,255),random(0,255));
            this.image=loadImage("snow5.webp")
            World.add(world,this.body)
        }
        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
    
            push();
            translate(pos.x,pos.y);
            rotate(angle);
        //noStroke();
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0,0,this.w,this.h);
            pop();
        }
    };