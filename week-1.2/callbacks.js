// function sum (a,b,funToCall){
//     let result = a + b;
//     funToCall(result);
// }

// function displayResult(data){
//     console.log("The Result of sum is : " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's Result is : " + data);
// }

// const ans = sum(1,2,displayResultPassive)


function calculateArithmatic(a,b,funToCall){
    const ans = funToCall(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = calculateArithmatic(1,2,sub)
console.log(value)