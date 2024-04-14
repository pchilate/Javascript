function checkAllDivisor(n){
    // for(let i = 1; i <= n; i++){
    //     if (n % i === 0){
    //         process.stdout.write(i + " ");
    //         // console.log(i + " ");
    //     }
    // }
    
    for(let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            process.stdout.write(i + " ");
            if (i !== n / i){
                process.stdout.write(n / i + " ");
            }
        }
    }
    
}

let num = 36;
checkAllDivisor(num);



