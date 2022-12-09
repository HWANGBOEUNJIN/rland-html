import Fighter from "./fighter.js";
import Background from "./Background.js";
import missile from "./missile.js";
import Enemy from "./enemy.js";
import Item from "./item.js";
import context from "./ItemContext.js";


function GameCanvas() {

    this.fighter = new Fighter();
    this.Background = new Background();
    this.missiles = [];//미사일여러개를 써야하니까배열사용
    this.enemies = [];
    this.enemyInterval = 0;
    this.randAppearGap = 0;
    //this.items = [];

    // this.items.push(this.fighter);
    context.items.push(this.fighter);
    //context.items는 전역객체

    this.object = document.querySelector("canvas");
    this.object.focus();//화면열자마자 탭을 활성화(탭을캔버스로)시키기
    this.object.width = 1000;
    this.object.height = 700;
    this.object.onmousemove = this.clickHandler.bind(this);
    //onmousemove라는행동을하면 clickhandler함수를실행한다
    this.object.onkeydown = this.keyDownHandler.bind(this);
    this.object.onkeyup = this.keyUpHandler.bind(this);

};

GameCanvas.prototype = {
    clickHandler: function (e) {//여기서 e는 (클릭)이벤트
        this.fighter.move(e.x, e.y); //파이터가 내가 클릭하는 죄표로 움직임

    },

    keyDownHandler: function (e) {
        console.log(e.code);

        switch (e.code) {
            case "ArrowLeft":
                this.fighter.move("Left");
                break;
            case "ArrowRight":
                this.fighter.move("Right");
                break;
            case "ArrowUp":
                this.fighter.move("Up");
                break;
            case "ArrowDown":
                this.fighter.move("Down");
                break;
            case "Space":
                var missile = this.fighter.fire();//fire함수실행
                //    this.missile.onOutOfCanvas = function(missiles){
                //     this.missiles(missile);
                //    };
                this.missiles.push(missile);
                context.items.push(missile);
                missile.move(this.fighter.x, this.fighter.y);
                break;
        }
    },
    keyUpHandler: function (e) {
        switch (e.code) {
            case "ArrowLeft":
                this.fighter.stop("Left");
                break;
            case "ArrowRight":
                this.fighter.stop("Right");
                break;
            case "ArrowUp":
                this.fighter.stop("Up");
                break;
            case "ArrowDown":
                this.fighter.stop("Down");
                break;
        }
    },

    run: function () {

        //컨버스의 상태변경
        if (this.enemyInterval == 0) {
            var enemy = new Enemy();
            //enemy.move(this.fighter.x,this.fighter.y);
            this.enemies.push(enemy);
            context.items.push(enemy);
            this.randAppearGap = Math.floor(Math.random() * 20);
        }

        this.enemyInterval++;
        this.enemyInterval %= this.randAppearGap + 40;

        //상태변경 또는 상태체크
        this.Background.update();
        for (var item of context.items)
            item.update();
        //   this.fighter.update()
        //       m.update();
        //   for(var enemy of this.enemies)
        //       enemy.update();



        var ctx = this.object.getContext("2d");
        ctx.clearRect(0, 0, 1000, 700);//클리어리액트는 백그라운드 위에놓기
        this.Background.draw(ctx);

        for (var item of context.items)
            item.draw(ctx);
        // for(var e of this.enemies)
        //       e.draw(ctx);

        // for(var m of this.missiles)
        //       m.draw(ctx); 

        //   this.fighter.draw(ctx);


        // console.log("run");
        setTimeout(this.run.bind(this), 17);
    }

};
export default GameCanvas;