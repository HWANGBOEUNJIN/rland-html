import Igdslot from "./Igdslot.js";
import Igd from "./Igd.js";

export default class Box{

    constructor(x,y){
        this.x = x||320;
        this.y = y||620;
        this.flagR = false;
        this.flagL = false;

        this.img = new Image();
        this.img.src = "image/redbox_2.png";

        this.ingnum =0;
        this.ingres =[];
    }

    draw(ctx){
        //console.log("red box draw");
        ctx.drawImage(this.img,0,0,123,85,
            this.x,this.y,70,60)
    }

    move(x){

        var dir =x;
            switch(dir){
                case "Left":
                    this.ingnum--;
                    console.log("box left");
                    this.flagL = true;
                    break;
                case "Right":
                    this.ingnum++;
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

        if(this.flagL){
            console.log("flagL this.x"+this.x);
            this.x-=20;
        }
        else if(this.flagR){
            console.log("flagR this.x"+this.x);
            this.x+=20;
        }
    }
    
    print(ctx){

        if(this.ingnum ==0){
             //ctx.drawImage(this.breadimg,0,0,150,100,
                            //0,0,150,100);
            this.ingres.push(ingre);
            //console.log("빵!!!");
            
        }
        else if(this.ingnum ==1){
            //var ingre = new Igd();
            //ingre.draw(ctx);
            console.log("토마토!!!");
        }
        else if(this.ingnum ==2)
            console.log("양파!!!");
        else if(this.ingnum ==3)
            console.log("양상추!!!");
        else if(this.ingnum ==4)
            console.log("패티!!!");

    }

    #img
}