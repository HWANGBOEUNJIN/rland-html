//import Click from "./click"

export default class Background{
    #backgroundImg
    #gameLogoImg
    #gamestartImg
    #howtoplayImg
    #creatorImg
    #optionImg
    #충돌이미지
    #click

    constructor(){
        this.#backgroundImg = new Image();
        this.#backgroundImg.src = "image/background.jpg";
        
        this.#gameLogoImg = new Image();
        this.#gameLogoImg.src = "image/gameLogo.png";

        this.#gamestartImg = new Image();
        this.#gamestartImg.src = "image/gamestart.png";

        this.#howtoplayImg = new Image();
        this.#howtoplayImg.src = "image/howtoplay.png";

        this.#creatorImg = new Image();
        this.#creatorImg.src = "image/creator.png";

        this.#optionImg = new Image();
        this.#optionImg.src = "image/option.png";

        this.#충돌이미지 = new Image();
        this.#충돌이미지.src = "image/충돌이미지.png";
   
        //this.#click = new Click();
    }

    draw(ctx){
        ctx.drawImage(this.#backgroundImg,0,0,640,480,
            0,0,1000,700);
        ctx.drawImage(this.#gameLogoImg,0,0,333,104,
            1000/2-332/2,100,333,104);
        ctx.drawImage(this.#gamestartImg,0,0,263,83,
            400,300,263,83);
        ctx.drawImage(this.#howtoplayImg,0,0,263,83,
            400,450,263,83);
        ctx.drawImage(this.#creatorImg,0,0,263,83,
            400,600,263,83);
        ctx.drawImage(this.#optionImg,0,0,72,72,
            900,600,72,72);
        this.#click.draw();
    }
/*
    onclick(this.#gameLogoImg){
        //ctx.drawImage(this.#충돌이미지,0,0,381,182,
        //                0,0,300,400)
        console.log("dd");
    }
*/
   // addEventListener("keydown", (e) => console.log(e));

        //console.log(e.code);
/*
        switch(e.code){

            case "ArrowLeft" :
                this.fighter.move("Left");
                break;

            case "ArrowRight" :
                this.fighter.move("Right");
                break;

            case "ArrowUp" :
                this.fighter.move("Up");
                break;

            case "ArrowDown" :
                this.fighter.move("Down");    
                break;


            case "Space" :
                var missile = this.fighter.fire(); //발사하면 생기는 미사일객체 
                
            
                for(var i=0;i<this.missiles.length;i++){
                    if(this.missiles[i].y<0){
                        this.missiles.splice(i,1);
                        //i--;
                    }
                }
*/

    /*
    this.#gamestartImg.addEventListener("click",)
    
    this.#gamestartImg.onclick(ctx){
        console.log("dd");
        ctx.drawImage(this.#충돌이미지,0,0,72,72,
            900,600,72,72);
    }
*/

};

