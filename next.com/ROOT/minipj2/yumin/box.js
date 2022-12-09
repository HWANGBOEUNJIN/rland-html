import Igdslot from "./Igdslot.js";
import Igd from "./Igd.js";

export default class Box{

    constructor(x,y){
        this.x = x||320;
        this.y = y||610;

        this.img = new Image();
        this.img.src = "image/redbox_2.png";

        this.ingnum =0;
        this.ingres =[];
        this.start = 0;
        this.gap = 0;
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
                    this.flagL = true;
                    break;
                case "Right":
                    this.ingnum++;
                    if(this.ingnum>4)
                        this.ingnum = 4;
                    this.flagR = true;
                    break;
            }
        
    }

    stop(dir){

        switch(dir){
            case "Left":
                this.flagL = false;
                break;

            case "Right":
                this.flagR = false;
                break;

        }
    }

    update(){

        console.log(this.ingnum);
        this.x = this.start+(this.gap*this.ingnum);
        // if(this.ingnum==0)
        //     this.x = this.start
        // else if(this.ingnum== 1)
        //     this.x = this.start+(this.gap*this.ingnum)
        // else if(this.ingnum== 2)
        //     this.x = this.start+(this.gap*this.ingnum)
        // else if(this.ingnum== 3)
        //     this.x =this.start+(this.gap*this.ingnum)
        // else if(this.ingnum== 4)
        //     this.x = this.start+(this.gap*this.ingnum)
        
    }
    
    #img
}

