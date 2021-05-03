let correctAnswers = 0;
let answer = "";
let challanger = "New Challanger"

alert("hello, wanna play a game?")

challanger = prompt("Tell me your name challanger!");
answer = prompt("What is the meaning of life?");
if(answer == "42"){
    correctAnswers++;
}
answer = prompt("Is yoghurt a dairy product?");
if(answer.toLowerCase() == "yes"){
    correctAnswers++;
}
answer = prompt("Is this fun?");
if(answer.toLowerCase() == "yes"){
    correctAnswers++;
}

alert("Congratulations " + challanger +"! You got" +correctAnswers+":3 points!");