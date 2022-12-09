export default class Tray{

    constructor(){
        this.img = new Image();
        this.img.src = "image/tray.png";
        this.img.width = 600;
        this.img.height = 400;
    }

    draw(ctx){
        ctx.drawImage(this.img,0,0,1333,548,
                    300,100,this.img.width,this.img.height)
    }
}