function getData(){
    return {kor :10, eng :20, math:30 }
}

function getList(){

    let data = getData();

    let list = [];
    list.push(data);
    return list;
}
let list = getList();

console.log(list);