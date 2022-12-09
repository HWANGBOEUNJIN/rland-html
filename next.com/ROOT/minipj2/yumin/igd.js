export default class Igd{

    constructor(x,y){
        this.x = x || 470;
        this.y = y || 200;

        this.img = new Image();
        this.img.src = "image/tong.png"


    }
    
    draw(ctx,a){
        ctx.drawImage(this.img,(1060/5)*a,0,200,162,
                        this.x,this.y,250,150)



    }
    
    update(){
        this.y+=10;
            
    }
}