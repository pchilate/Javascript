let count = 30;

function Counter(){
    console.log(count);
    count--;
    if(count >=0){
        setTimeout(Counter,1000);
    }
}

Counter();