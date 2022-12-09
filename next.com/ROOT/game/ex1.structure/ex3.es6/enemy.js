import Item from "./item.js";

export default class Enemy extends Item {
    constructor(x, y) {
        super();
        // this.x = x || 0;
        // this.y = y || 0;

        this.x = Math.floor(Math.random() * 600);
        this.#vx = 0;
        this.#vy = 0;
        this.#dx = this.x;
        this.#dy = this.y;
        this.#speed = 3;

        this.#imgDelayIndex = 0;
        this.#imgIndex = 3;
        this.#img = new Image();
        this.#img.src = "image/enemy.png";
        this.#imgExp1 = new Image();
        this.#imgExp1.src = "image/explosion.jpg";

        this.#ex = 0;
        this.#ey = 0;
    }


    // move(x, y) {
    //     this.#dx = x;
    //     this.#dy = y;

    //     //등속도
    //     let w = this.#dx - this.#x;
    //     let h = this.#dy - this.#y;

    // }
    update() {

        super.update()
        this.y += this.#speed;
        // this.#ex++;
        // 매타입마다 0으로초기화되어야함
        // this.#ey++;

        if (this.isHit)
            this.#ex++;
        if (this.#ex > 3) {
            this.#ey++;
            this.#ex = 0;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.#img, this.x, this.y);
        if (this.isHit)
            ctx.drawImage(this.#imgExp1,
                160 * this.#ex, 120 * this.#ey, 160, 120,
                this.x - 50, this.y - 30, 160, 120)
        // ctx.drawImage(this.#imgExp1,this.x, this.y,0,0, 
        // this.x, this.y,160,120)

    }

    //getter와 setter는 get(띄어쓰기)x 필수임.
    //꺼내쓸때 get과set을 쓰지않아도 쓸수있다
    // get x() {
    //     return this.x;
    // }
    // set x(x) {
    //     return this.x = x;
    // }
    #vx;
    #vy;
    #dx;
    #dy;
    #speed;
    #imgIndex;
    #imgDelayIndex;
    #img;
    #status;
    #ex;
    #ey;
    #imgExp1
    //자바의 private의기능 == 자바스크립트는 #을 붙여준다
    //#을 쓰는 변수들을 써두고 클래스안에 쓰이는 변수도 모두 #을붙여줌
    //위에 써두는 것보다 아래에 써두는 게 깔끔해보인다
}