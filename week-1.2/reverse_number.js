function reverseNumber(n){
    let rev_num = 0;
    while(n > 0){
        let ld = n % 10;
        rev_num = (rev_num*10) + ld;
        n = Math.floor(n / 10);
    }
    return rev_num;

}

let n = 1335;
console.log("The reverse number is : " + reverseNumber(n));