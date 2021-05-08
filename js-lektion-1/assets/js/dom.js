//const BOX = document.querySelector(".box.red");

let P_ALL = {};

const FIFTH_ID = document.querySelector("#fifth");
var fifthElement = document.getElementById("fifth");
const ITEM_LIST = document.querySelectorAll(".item");

function main(){
    findAllElements();
}

function removeFifth() {
    fifthElement.parentNode.removeChild(fifthElement);
}

function changeItemColor(){
    for (let index = 0; index < ITEM_LIST.length; index++) {
        ITEM_LIST[index].style.color = "green";
        
    }
}

function findAllElements(){
    P_ALL = document.querySelectorAll("p");
}


main();
removeFifth();
changeItemColor();
//console.dir(BOX);
//console.dir(P_ALL)


for (let index = 0; index < P_ALL.length; index++) {
    P_ALL[index].innerText = 'Det här var ju trevligt!'
    
}



//BOX.classList.remove("red");
//BOX.classList.add("green");