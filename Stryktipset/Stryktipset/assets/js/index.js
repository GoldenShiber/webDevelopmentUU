import {getMatchList} from './matchdata.js';

const TABLE = document.querySelector("#table");
const RESULT_OUTCOMES = ["1", "x", "2"];

initiateMatchList(); 

function initiateMatchList(){
    let matchList = getMatchList();
    matchList.then(function(matches){

        for (let index = 0; index < matches.length; index++) {
            var tr = TABLE.insertRow();
            var cell = tr.insertCell();
            cell.innerText = index +1;
            cell = tr.insertCell();

            // Here I tried to make a smart way to add an element to the innerHTML, however this worked, and it does what is supposed to do.
            cell.innerHTML = '<a href=' +matches[index].getHomeTeam().getWebsite() + '>' + matches[index].getHomeTeam().getName()+'</a>'
                + " --VS-- " + '<a href=' +matches[index].getAwayTeam().getWebsite() + '>' + matches[index].getAwayTeam().getName()+'</a>';

            // Go through the 3 possible boxes and if we find the right outcome we go to the next row.
            for (let checkBoxIndex = 0; checkBoxIndex < 3; checkBoxIndex++) {
                var cell = tr.insertCell();
                var checkBoxSpan = document.createElement('span');

                if(RESULT_OUTCOMES.indexOf(matches[index].getOutcome().toLowerCase()) == checkBoxIndex){
                    checkBoxSpan.classList.add("checkmark");
                    var divElement = document.createElement('div');
                    divElement.classList.add("stem");
                    
                    checkBoxSpan.appendChild(divElement);
                    
                    var divElement2 = document.createElement('div');
                    divElement2.classList.add("kick");
                    checkBoxSpan.appendChild(divElement2);
                    cell.appendChild(checkBoxSpan);
                    break;
                } 
            }       
        }
    });
}

