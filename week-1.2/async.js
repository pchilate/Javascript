// function findSum(){
//     let ans = 0;
//     for(let i = 0; i<100; i++){
//         ans += i;
//     }
//     return ans;
// }


// function findSumTill100(){
//     console.log(findSum());
// }

// // findSumTill100();
// setTimeout(findSumTill100,1000);
// console.log("Hello world!");



// filesystem module
const fs = require("fs")

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("hi there");


for(let i= 0; i<10000000000; i++){
    i++;
}

console.log("hi there 2");
