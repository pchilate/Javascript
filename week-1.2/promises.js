const fs = require("fs");

// Asynchronous functions using callbacks


// function pratikReadfile(cb){
//     fs.readFile("a.txt", "utf-8", function(err,data){
//         cb(data);
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// pratikReadfile(onDone);




// Asynchronous functions using promises

function pratikReadfile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8", function(err, data){
            resolve(data);
        })
    })
}


function onDone(data){
    console.log(data);
}

pratikReadfile().then(onDone);