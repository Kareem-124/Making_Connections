function changeName(){
    var name = document.querySelector(".cardInfo_Container h1");
    name.innerHTML="Jamal R"
}

function accept(num){
    deleteRequest(num);
    var increase = document.querySelector(".connections_Container .black_header .header_center_circle p");
    increase.innerHTML = parseInt(increase.innerHTML) + 1;
}

function accept(num){
    deleteRequest(num);
    var increase = document.querySelector(".connections_Container .black_header .header_center_circle p");
    increase.innerHTML = parseInt(increase.innerHTML) + 1;
}

function deleteRequest(num){
    document.querySelector(`#id${num}`).remove();
    var decrease = document.querySelector(".connectionsRequest_Container .black_header .header_center_circle p");
    decrease.innerHTML = parseInt(decrease.innerHTML) - 1;
}