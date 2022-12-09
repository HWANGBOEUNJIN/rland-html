export default class Igd{

        //바뀐 곳 ------------
    constructor(x,y){
        this.x = x || 470;
        this.y = y || 100;
        this.index = 0;
        
        this.speed=10;
        
        this.img = new Image();
        this.img.src = "image/tong.png"


    }
    

    draw(ctx,temp){
        if(this.y<temp)
            ctx.drawImage(this.img,
                        (1060/5)*this.index,0,200,162,
                        this.x,this.y,250,150)
        else ctx.drawImage(this.img,
                        (1060/5)*this.index,0,200,162,
                        this.x,temp,250,150)

    }
    
    update(){
        this.y+=this.speed;
    }
}