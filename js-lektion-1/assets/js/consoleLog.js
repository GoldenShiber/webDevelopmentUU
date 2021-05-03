
function main(){
    createListeners();
}

function createListeners() {

}

function sayMyNameWithNumbers(name, age){
    for(let index = 0; index < 5; index++){
        name = name + index + ' ';
    }
    
    console.log(name + ' ' +age);
}


let sayMyNameAnon = function (name, age){
    
    return name + ' ' +age;
}

function javaReplacer(sentence){
    var replacement = sentence.replace("Java", "Javascript");
    console.log(replacement);
}


sayMyNameWithNumbers("kalle ", 34);

let answer = sayMyNameAnon("koalan ", 43);
console.log(answer);
javaReplacer("Java is awesome!");
