window.onload = function () {
    var btnRequest = document.getElementById("btnRequest");
    btnRequest.onclick = (e) => {
        e.preventDefault();
        
        let request = new XMLHttpRequest();
        request.onload = () => {
            //request.responseText
        };
        //데이터를주는것 호스팅
        // request.open("POST", "너에게")
        // request.send("이것을")
        request.open("POST", "add")
        request.send("x=2&y=4")
        //URL기반의 요청형식  x=2&y=4&title&
        
    }

}