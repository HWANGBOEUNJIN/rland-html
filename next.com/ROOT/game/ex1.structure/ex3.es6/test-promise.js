//promise 

function getData(Callback) {
    Callback({ kor: 10, eng: 20, math: 30 });
}

function getList() {

    return new Promise(function (resolve, reject) {

        let list = [];

        getData(function (data) {
            
            list.push(data);

            if (data.kor == undefined)
                reject(1);

            resolve(list);

        })
    });
}

// getList()
// .then(function(list){
//     console.log(list);
// });
//=========================================================================

getList()
    .then(list => list[0], state => { console.log(`오류코드 : $(state)`) })
    .then(exam => {
        exam.kor += 10;
        exam.eng -= 5;
        return exam;
    })
    .then(exam => {
        console.log(exam.kor);
        console.log(exam.eng);
    })



console.log("작업완료");
