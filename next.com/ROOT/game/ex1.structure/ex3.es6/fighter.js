import missile from "./missile.js";
import Item from "./item.js";

class Fighter extends Item { //생성자 정의
    constructor(x, y) {
        super();
        //상속받았다면 생성자에 꼭 super써주기
        // this.x=x || 0;
        // this.y=y || 0;
        this.vx = 0;//속도(벡터)사용
        this.vy = 0;
        this.dx = this.x;
        this.dy = this.y;
        this.speed = 3;

        this.flagN = false;
        this.flagS = false;
        this.flagE = false;
        this.flagW = false;

        this.imgDelayIndex = 0;
        this.imgIndex = 3;
       // this.img = new Image();
        this.img.src = "image/fighters.png";
       // console.log(`width:$(this.img.width).bind`)

    }

    //class 448*64
    //객체
    fire() {
        return new missile(this.x, this.y);
    }
    draw(ctx) {
        var w = this.width;
        var h = this.height;
        //var halfwidth =this.img.width/2;
        var hw = w/2;
        var hh = h/2;

        var x = this.x - hw;//마우스위로 뱅기옮기기
        var y = this.y - hh;
        ctx.drawImage(this.img,
            64* this.imgIndex, 0, w, h,
            x, y, w, h);
    }
    move(x, y) {

        if (arguments.length == 1) {//방향
            var dir = x;

            //이동은 update에서 상시처리
            //여기서는 방향상태만 바꾸는 걸로

            switch (dir) {
                case "Left":
                    this.flagW = true;
                    // this.x-=this.speed;
                    break;
                case "Right":
                    this.flagE = true;
                    // this.x+=this.speed;
                    break;
                case "Up":
                    this.flagN = true;
                    // this.y-=this.speed;
                    break;
                case "Down":
                    this.flagS = true;
                    // this.y+=this.speed;
                    break;
            }
        }
        else if (arguments.length == 2) {//좌표

            this.dx = x;
            this.dy = y;

            //등속도
            var w = this.dx - this.x;
            var h = this.dy - this.y;
            var d = Math.sqrt(w * w + h * h);
            this.vx = (this.dx - this.x) / d * this.speed;
            this.vy = (this.dy - this.y) / d * this.speed;
            console.log(this);
        }
    }
    stop(dir) {
        switch (dir) {
            case "Left":
                this.flagW = false;
                // this.x-=this.speed;
                break;
            case "Right":
                this.flagE = false;
                // this.x+=this.speed;
                break;
            case "Up":
                this.flagN = false;
                // this.y-=this.speed;
                break;
            case "Down":
                this.flagS = false;
                // this.y+=this.speed;
                break;
        }
    }

    update() { // 애니메이션프레임에 항상 들어가야함.
        // this.x += this.vx;
        // this.y += this.vy;
        // super.();

        super.update();
        
        
        if (this.flagE)//flagE가 true면 (스피드+x 해주기)→E방향임 
            this.x += this.speed;
        if (this.flagW)
            this.x -= this.speed;
        if (this.flagS)
            this.y += this.speed;
        if (this.flagN)
            this.y -= this.speed;
        // var a=(6);

        if (++this.imgDelayIndex % 7 == 0) {
            if (this.vx > 0) {//파이터오른쪽으로 돌기
                this.imgIndex++;
                if (this.imgIndex == 6)
                    this.imgIndex--;
            }
            else if (this.vx < 0) {//왼쪽으로돌기
                this.imgIndex--;
                if (this.imgIndex == 0)
                    this.imgIndex++;
            }
        }
        //목적지에 도착했다면
        if (this.dx - 2 <= this.x && this.x <= this.dx + 2) {
            this.vx = 0;//속도0으로
            this.vy = 0;
        }
    }
     get width(){
        return super.width/7;
     }      

}


export default Fighter;
