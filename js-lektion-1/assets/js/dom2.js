const BUTTON = document.querySelector("button");
const INPUT = document.querySelector("#oneInput");
const UL = document.querySelector("ul");
const inputOutputID = document.querySelector(".inputs-output");
const OL = document.querySelector("ol");
let ol = document.querySelector("ol");
let ul = document.querySelector("ul");

//const inputOutputP = inputOutputID.querySelector("p");

BUTTON.addEventListener("click", buttonClickEx1);

ol.addEventListener("click", olItemAction);

ul.addEventListener("click", ulItemAction);

function olItemAction(event){
    if(event.target.tagName.toUpperCase() !=='OL'){
    event.target.remove();
    ul.appendChild(event.target);
    }
}

function ulItemAction(event){
    if(event.target.tagName.toUpperCase() !=='UL'){
    event.target.remove();
    ol.appendChild(event.target);
    }
}

function buttonClick(event) {
    writeToConsole(INPUT.value);
    createAndInsertElement(INPUT.value);
}

function buttonClickEx1(event){
    inputOutputID.innerHTML = INPUT.value;
}

function writeToConsole(value) {
    console.log(value)
}

function createAndInsertElement(value){
    const ITEM = document.createElement("li");
    ITEM.innerHTML = value;
    UL.appendChild(ITEM);
}

function addFourthElement(){
    const ITEM = document.createElement("li");
    ITEM.innerHTML = "forth";
    let element = document.getElementById("fifth");
    OL.insertBefore(ITEM, element);
}

function removeLiElement(event){

}

addFourthElement();