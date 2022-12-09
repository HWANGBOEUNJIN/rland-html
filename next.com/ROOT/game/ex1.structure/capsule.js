function print(){
    console.log(this);
}

function Box(x, y,w,h){
    this.x= x || 50;
    this.y= y || 50;
    this.w= w || 50;
    this.h= h || 50;
    this.draw=function(){
        console.log(this.x+"에 그림그리기");
    };
}

//함수는 항상 프로토타입에 넣어주기 
//new를 이용해 계속생성해주면 데이터가 많이 사용돼서 
Box.prototype={
    draw:function(){

    },aa:function(){

    }
};

window.print();
var box=new Box();
console.log(box.aa);
var box1=new Box();
console.log(box1.aa);

//new를 쓰면 생성자로 사용됨 -초기화