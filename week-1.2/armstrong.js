function checkArmstrong(n){
    let temp = n;
    let sum = 0;
    while(n > 0){
        let ld  = n % 10;
        sum  = sum + (Math.pow(ld,3));
        n = Math.floor(n/10);
    }
    if(sum == temp){
        return "The number is armstrong";
    }
    else{
        return "The number is not armstrong";
    }
}

let num = 1331;
console.log(checkArmstrong(num));