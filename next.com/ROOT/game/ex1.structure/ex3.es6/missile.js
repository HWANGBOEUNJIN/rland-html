import Item from "./item.js";
class missile extends Item {
    constructor(x, y) {
        super();
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.dx = this.x;
        this.dy = this.y;
        this.speed = 3;

        this.imgDelayIndex = 0;
        this.imgIndex = 0;
        this.img = new Image();
        this.img.src = "image/missile.png";
    }

    draw(ctx) {
        var x = this.x - this.img.width / 2;
        var y = this.y - this.img.height / 2;
        ctx.drawImage(this.img,
            64 * this.imgIndex, 0, 64, 64,
            x, y, 64, 64);
    }

    update() {//움직이는 애니메이션을 만듬
        //this.x += this.vx;
        //this.y += this.vy;
        this.y -= this.speed;//??
        // this.y--;

    }

    move(x, y) {
        this.x = x;
        this.y = y;

        var w = this.dx - this.x;//이동해야하는 x좌표의 길이
        var h = this.dy - this.y;//이동해야하는 y좌표의 길이
        var d = Math.sqrt(w * w + h * h);//x,y의 사선의길이

        //이동속도구하기
        this.vx = (this.dx - this.x) / d * this.speed;//이동속도는 길거나 짧아도 동일해야하니 d로 나누어줌
        this.vy = (this.dy - this.y) / d * this.speed;
    }

    onOutOfCanvas() {


    }
}
export default missile;

