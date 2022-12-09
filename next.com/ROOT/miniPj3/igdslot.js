import Igd from "./igd.js";
export default class Igdslot{

    #img

    constructor(){
        this.#img = new Image();
        this.#img.src = "image/ingreslot.png";
    }
    draw(ctx){
        ctx.drawImage(this.#img,0,0,1186,188,
                        300,600,1186/2,188/2)
    }

    make(){
        return new Igd();
        
    }
}