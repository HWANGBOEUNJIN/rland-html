export default class Igd{

    constructor(x,y){
        this.x = x || 400;
        this.y = y || 200;
				this.imgIndex=0;

				this.img = new Image();
        this.img.src = "image/sprites.png";
        
    }
    
    draw(ctx,imgIndex){
        this.imgIndex=imgIndex;
        ctx.drawImage(this.img
                    ,(1060/5)*this.imgIndex,0,1060/5,162
                    ,300,this.y,150,100);
    }
    
    update(){
        this.y+=10;
    }
}