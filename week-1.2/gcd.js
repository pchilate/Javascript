
function checkGcd(a,b){
    if (b === 0){
        return a;
    }
    else{
        return checkGcd(b,a%b);
    }
}



let num1 = 10;
let num2 = 5;

console.log(checkGcd(num1,num2));

