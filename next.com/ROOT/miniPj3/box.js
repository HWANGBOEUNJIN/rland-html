import Igdslot from "./Igdslot.js";
import Igd from "./Igd.js";

export default class Box{

    constructor(x,y){
        this.x = x||320;
        this.y = y||610;
        
        this.img = new Image();
        this.img.src = "image/redbox_2.png";

        this.ingnum =0; // ingredient 이미지의 index값
       
        this.start=320;
        this.gap=80;
        
    }

    draw(ctx){
        ctx.drawImage(this.img,0,0,123,85,
            this.x,this.y,80,60)
    }

    move(x){

        var dir =x;
            switch(dir){
                case "Left":
                    this.ingnum--;                    
                    if(this.ingnum<0)
                        this.ingnum = 0;
                    console.log("box left");
                break;
                case "Right":
                    this.ingnum++;
                    if(this.ingnum>4)
                        this.ingnum = 4;
                    break;
            }
        
    }

    update(){

        //박스 위치 지정/this.start : 시작점/this.gap : 움직임 간격
        this.x = this.start + this.gap*this.ingnum;
        
    }
    
    #img
}
