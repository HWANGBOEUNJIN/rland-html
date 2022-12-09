function getData(){
    return {kor :10, eng :20, math:30 }
}

function getList(Callback){
    let list = [];

    let data = getData();

    list.push(data);
    Callback(list);
}
// let list = getList();

getList(function(list){
    console.log(list);
})
console.log("작업완료");