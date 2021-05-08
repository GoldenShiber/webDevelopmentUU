const NAME = document.querySelector('.name');

printName("olle");

const NAME_INTERVALL = setInterval(() => {
    printName("olle");
    
    if(myTimer === 10000000000) {
        clearInterval(NAME_INTERVALL);
    }
}, 5000);

function printName(myName) {
    NAME.innerHTML = myName;
}