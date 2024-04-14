
function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++)
    {
        if(n % i === 0){
            return false;
        }
    }
    return true;
}


let num = 12;
let ans = isPrime(num);

if (num !== 1 && ans === true){
    console.log("Prime Number");
}
else{
    console.log("Not A Prime Number");
}