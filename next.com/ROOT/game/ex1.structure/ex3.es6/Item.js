//enemy, filghter, missile묶는 item
import context from "./ItemContext.js";

export default class item {
    #x;
    #y;
    #img;
    #isHit;
    #width;
    #height;
    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
        this.#img = new Image();
        this.#isHit = false;
        this.#width = this.#img.width;
        this.#height = this.#img.height;
        //ishit : 충돌 (2가지로 나눌수있으니까 boolean씀)
    }
    getNawabari() {

    }
    hit() {
        this.#isHit = true;
        console.log("충돌");
    }
    update() {
        for (let item of context.items){
        if (item == this)
        //if(item이 나와 일치한다면)
        continue;
        //for문 반복
        //교차연산: 인터셉트 
        //math.ceil : 무조건 수를 올림해주기
        //math.round : 반올림
        //math.floor :실수를 정수로
        let w =   this.#x - item.x;
        let h =   this.#y - item.y;
        let d = Math.sqrt(w * w + h * h); 
        let sumR = this.#width / 2 + item.width / 2
        //sumR =나의 너비 + 나랑 충돌하는 거의 너비 
        
        if (d <= sumR)//거리가 sumR보다 적거나 같다면 충돌했다는뜻
        this.hit();
        }

    }
    draw(ctx) {

    }
    get x() {
        return this.#x;

    }
    set x(x) {
        this.#x = x;
    }
    get y() {
        return this.#y;

    }
    set y(y) {
        this.#y = y;
    }
    get img() {
        return this.#img;
    }
    set img(img) {
        this.#img = img;
    }
    get width() {
        return this.#img.width;
    }
    get height() {
        return this.#img.height;
    }
    get isHit(){
        return this.#isHit;
    }

}
