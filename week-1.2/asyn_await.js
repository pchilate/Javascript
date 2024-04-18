console.log("Hi there");


function asyncProm(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi there 2")
        }, 3000);       
    })
}


async function main(){
    const a = await asyncProm();
    console.log(a)
    console.log("Hi there 3")
}

main();

for(let i= 0; i<=5; i++){
    console.log(i);
}