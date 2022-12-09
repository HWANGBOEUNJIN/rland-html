function Background(){
    this.y=0;
    this.x=0;
  this.img=new Image();
  this.img.src="image/hamburgerShop.jpg";
  
}

Background.prototype={
    
    // update:function(){
       
    // },
    draw:function(ctx){
        ctx.drawImage(this.img,0,0,640,480);
    }

};


//배경을 계속 이어서 나오게하려면 배경2개를 써야함 
//하나끝날쯤 하나붙여주고 (반복)
export default Background;