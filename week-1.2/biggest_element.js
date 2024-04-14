
function biggestElement(arr){
    biggest_elem = arr[0];
    for(let i = 1; i<= arr.length; i++)
    {
        if (arr[i] > biggest_elem){
            biggest_elem = arr[i];
        }
    }
    return biggest_elem;
}

let num_arr = [1,5,9,86,84,10];
console.log("The biggest number in the array is : " + biggestElement(num_arr));