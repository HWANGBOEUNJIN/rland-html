import Background from "./background.js";
import Igdslot from "./igdslot.js";
import Box from "./box.js";
import Tray from "./tray.js";
import Igd from "./igd.js";

export default class GameCanvas{
    //#background


    constructor(){
        this.background = new Background();
        this.igd = new Igd();
        this.igdslot = new Igdslot();
        //this.box = new Box();
        this.backimg = new Image();
        this.backimg.src = "image/hamburgerShop.jpg";

        this.obj = document.querySelector("canvas");
        this.obj.width = 1000;
        this.obj.height = 700;
        this.obj.focus();
        this.obj.onkeydown = this.keyDownHandler.bind(this);
        this.obj.onkeyup = this.keyupHandler.bind(this);
        this.box = new Box() ;
        this.tray = new Tray();
        this.ingres = [];
        this.ingre;
        this.ingnummm =0;
        // this.obj.onclick= this.clickHandler.bind(this);
    }

    keyDownHandler(e){  
        //console.log(e.code);
        
        switch(e.code){
            case "ArrowLeft" :
                this.box.move("Left");
                console.log("왼쪽");
                break;

            case "ArrowRight" :
                this.box.move("Right");
                console.log("오른쪽");
                break;

            case "Space" :
                console.log(this.box.ingnum);
                var ingre = this.igdslot.make();
                //console.log(ingre);
                
                this.ingres.push(ingre);

                for(var i=0;i<this.ingres.length;i++){
                    if(this.ingres[i].y>600){
                        this.ingres.splice(i,1);
                        //i--;
                    }
                }


                break;
        }
    }

    keyupHandler(i){

        switch(i.code){
            case "ArrowLeft" :
                this.box.stop("Left");
                break;

            case "ArrowRight" :
                this.box.stop("Right");
                break;
        }
    }



    run(){

        //상태변경
        this.box.update();
        for(var i of this.ingres){
            i.update();
        }


        //그림그리기
        var ctx = this.obj.getContext("2d");
        ctx.clearRect(0,0,1000,700);
        ctx.drawImage(this.backimg,0,0,640,480,0,0,1000,700)
        this.tray.draw(ctx);
        this.igdslot.draw(ctx);
        this.box.draw(ctx);

        
        for(var i of this.ingres){
            i.draw(ctx,this.box.ingnum);
        }


        //this.ingre.draw(ctx);
        setTimeout(this.run.bind(this),17);
    }


}