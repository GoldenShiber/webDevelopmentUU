const DATE = document.querySelector('.date');

printDate(Date.now());

const DATE_INTERVALL = setInterval(() => {
    printDate(Date.now());
    
    if(myTimer === 10000000000) {
        clearInterval(DATE_INTERVALL);
    }
}, 10000);

function printDate(myName) {
    DATE.innerHTML = myName;
}