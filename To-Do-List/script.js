
let id = 0;
let shubh = new Map();

let curr = document.querySelector(".container");


function addTask() {
    let myText = document.querySelector(".take").value;
    shubh.set(id, myText);
    id++;

    document.querySelector(".take").value = "";
    showData();
}


function showData() {

    let div = document.createElement("li");
    div.innerText = shubh.get(id-1);
    curr.appendChild(div);
}




