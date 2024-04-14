function checkPalindrome(n){
    let temp = n;
    let rev_num = 0;
    while(n > 0){
        let ld = n % 10;
        rev_num = (rev_num * 10) + ld;
        n = Math.floor(n / 10);        
    }
    if (rev_num == temp){
        return "The number is palindrome";
    }
    else{
        return "The number is not palindrome";
    }

}

let num = 131;
console.log(checkPalindrome(num));