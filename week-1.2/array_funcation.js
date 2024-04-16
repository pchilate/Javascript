const initialArray = [1,2,3]
initialArray.push(2);
console.log(initialArray);
initialArray.pop();
console.log(initialArray);
initialArray.shift();
console.log(initialArray);
initialArray.unshift(3);
console.log(initialArray);


const secondArray = [4,5,6]
console.log(initialArray.concat(secondArray));



function logThing(str){
    console.log(str);
}

initialArray.forEach(logThing);
