import missile from "./missile.js";

function Fighter(x,y){ //생성자 정의
    this.x=x || 0;
    this.y=y || 0;
    this.vx=0;//속도(벡터)사용
    this.vy=0;
    this.dx=this.x;
    this.dy=this.y;
    this.speed=3;

    this.flagN = false;
    this.flagS = false;
    this.flagE = false;
    this.flagW = false;

    this.imgDelayIndex=0;
    this.imgIndex=3;
    this.img = new Image();
    this.img.src = "image/fighters.png";
}

//class 448*64
Fighter.prototype={ //객체
    fire:function(){
        return new missile(this.x, this.y);
    },
    draw:function(ctx){
        var x= this.x-32;//마우스위로 뱅기옮기기
        var y= this.y-32;
        ctx.drawImage(this.img,
            64*this.imgIndex,0,64,64,
            x,y,64,64);
    },
    move:function(x,y){
        
        if(arguments.length == 1){//방향
            var dir = x;

            //이동은 update에서 상시처리
            //여기서는 방향상태만 바꾸는 걸로

            switch(dir){
                case "Left" :
                    this.flagW = true;
                    // this.x-=this.speed;
                    break;
                case "Right" :
                    this.flagE = true;
                    // this.x+=this.speed;
                    break;
                case "Up" :
                    this.flagN = true;
                    // this.y-=this.speed;
                    break;
                case "Down" :
                    this.flagS = true;
                    // this.y+=this.speed;
                    break;    
            }
        }
        else if(arguments.length == 2){//좌표

            this.dx=x;
            this.dy=y;
            
            //등속도
            var w =this.dx - this.x;
            var h =this.dy - this.y;
            var d =Math.sqrt(w*w+h*h);
            this.vx = (this.dx-this.x)/ d*this.speed;
            this.vy = (this.dy-this.y)/ d*this.speed;
            console.log(this);
        }
    },
    stop : function(dir){
        switch(dir){
            case "Left" :
                this.flagW = false;
                // this.x-=this.speed;
                break;
            case "Right" :
                this.flagE = false;
                // this.x+=this.speed;
                break;
            case "Up" :
                this.flagN = false;
                // this.y-=this.speed;
                break;
            case "Down" :
                this.flagS = false;
                // this.y+=this.speed;
                break;    
        }
    },

    update:function(){ // 애니메이션프레임에 항상 들어가야함.
        // this.x += this.vx;
        // this.y += this.vy;

        if(this.flagE)//flagE가 true면 (스피드+x 해주기)→E방향임 
            this.x+=this.speed;
        if(this.flagW)
            this.x-=this.speed;
        if(this.flagS)
            this.y+=this.speed;
        if(this.flagN)
            this.y-=this.speed;
        // var a=(6);

        if(++this.imgDelayIndex%7 == 0){
            if(this.vx>0){//파이터오른쪽으로 돌기
                this.imgIndex++;
                if(this.imgIndex==6)
                    this.imgIndex--;
            }
            else if(this.vx<0){//왼쪽으로돌기
                this.imgIndex--;
                if(this.imgIndex==0)
                this.imgIndex++;                
            }
        }
        //목적지에 도착했다면
        if(this.dx -2 <= this.x && this.x <=this.dx+2){
            this.vx=0;//속도0으로
            this.vy=0;
            this.imgIndex=3;//파이터정면으로
        }
    }
    
};

export default Fighter;
