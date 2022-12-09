function Background(){
    this.y=1200-700/3;//배경을 3배*해준만큼 /3해줌
    this.speed = 10;
  this.img=new Image();
  this.img.src="image/space.jpg";
  
}

Background.prototype={
    setSpeed:function(speed){
        this.speed=speed;
    }, 
    update:function(){
        this.y--; // 배경 연결하기 (숙제)
        if(this.y<-1200)
            this.y=0;
    },
    draw:function(ctx){
        ctx.drawImage(this.img,
                    0,this.y,360,1200,
                    0,0,360*3,1200*3); // 확대해서 뿌림
        
        
        ctx.drawImage(this.img,
                    0,this.y+1200,360,1200,
                    0,0,360*3,1200*3);
        

    }

};


//배경을 계속 이어서 나오게하려면 배경2개를 써야함 
//하나끝날쯤 하나붙여주고 (반복)
export default Background;