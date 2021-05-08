import {getMatchData, getMatchList} from './matchdata.js';

const IMAGE = document.querySelector("#fotball");
const SMALL_LOGO = document.querySelector("header");
const TABLE = document.querySelector("#table");

addListeners();

collectData();

//initiateMatchList();

function addListeners() {
    IMAGE.addEventListener('click', quoteButtonClicked)
}

function quoteButtonClicked() {
    initiateMatchList();
    console.log("Hello mister1");
}

function insertParagraph(text) {
    const p = document.createElement('p');
        p.innerText = text;
    SMALL_LOGO.appendChild(p);
}

function collectData(){
    let matchList = getMatchList();

    console.dir(matchList);
    
}

async function initiateMatchList(){
    let matchList = getMatchList();
    console.log(matchList.length);
    
    for (let index = 0; index < matchList.length; index++) {
        var tr = TABLE.insertRow();
        var cell = tr.insertCell();
        cell.innerText = index;
        cell = tr.insertCell();
        cell.innerText = matchList[0].getHomeTeam() + "-VS-" + matchList[0].getAwayTeam();
    }
}

