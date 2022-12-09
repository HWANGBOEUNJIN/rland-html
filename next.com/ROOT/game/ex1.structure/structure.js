//플랫폼이 제공하는 환경을 이용
//document.getElementById
function Box(x,y,h,w){
    this.x= x || 50;
    this.y= y || 50;
    this.w= w || 50;
    this.h= h || 50;

}
//prototype(기본형)
Box.prototype={
    draw:function(){
    var iw=this.w/2;
    var ih=this.h/2;
    
    ctx.clearRect(0,0,600,600);
    for(var i in boxes){
        bx=boxes[i];
        ctx.strokeRect(bx.x,bx.y,bx.w,bx.h);
        ctx.fillRect(bx.x+iw/2,bx.y+ih/2,iw,ih);
        console.log(i);
    }

    }

};

var canvas = document.querySelector("canvas");

canvas.height=600;
canvas.width=600;

var boxes =[];
canvas.onclick=function (e){
    // console.log(e.x);
    // x=e.x;
    // y=e.y;
    
    // ctx.clearRect(0,0,400,500)
    // ctx.strokeRect(x,y,50,50);
    // ctx.fillRect(x+12.5,y+12.5,25,25);
    var box=new Box(e.x,e.y);
    boxes.push(box);
    box.x=e.x;
    box.y=e.y;
    console.log(e.x,e.y);
    
    box.draw();
    
    // nums(var x, );
    // var boxes=[];
    // for(var i in nums)
    // console.log(nums[i]);
}

var ctx = canvas.getContext("2d");
// ctx.strokeRect(50,50,50,50);
// ctx.fillRect(62.5,62.5,25,25);

//위의 아이템의 x,y좌표는? 50, 50;(변수화하기)

var box=new Box();
box.draw()
// var x=50; 
// var y=50;

// ctx.strokeRect(x,y,50,50);
// ctx.fillRect(x+12.5,y+12.5,25,25);