export default class Click{



    constructor(){
        this.img = new Image();
        this.img.src ="image/충돌이미지.png";
    }
    
    draw(ctx){
        ctx.drawImage(this.img,0,0,381,182,
            0,0,300,500);
        }
        /*
        onclick(){
            console.log("dd");
            
        }
        */
}