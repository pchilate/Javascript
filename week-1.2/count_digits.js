
function countDigits(n){
    let count = Math.floor(Math.log10(n) + 1);
    return count;
 

}
// function countDigits(n){
//     let count = 0;
//     while(n > 0){
//         n = Math.floor(n / 100);
//         count++;
//     }

//     return count;

// }


let num = 12345;
console.log("The number of digits in the given number is : " + countDigits(num));