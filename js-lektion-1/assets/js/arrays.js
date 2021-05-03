//let arr1 = [5, 'hej', function() {console.log("hej")}];
// Function som excvareas
//arr1[2]();

let arr1 = [5, 'hej', 20];
arr1[2]= 10;

let ageArray= [4,2,6,3,7];

let test = arr1.pop();

function checkBabby(age){
    return age %2===0;
}

function reverse(testString){
    let stringArr = testString.split("");
    stringArr = stringArr.reverse().join("");
    return stringArr;
}

console.log(test);
console.log(ageArray.filter(checkBabby));
console.dir(arr1);
console.dir(reverse("!looc ma I os ,looc si tpircSavaJ'"));