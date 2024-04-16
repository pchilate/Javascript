function getLength(str){
    console.log("Original String: ", str);
    console.log("Length: ", str.length);
}

getLength("Hello World");



function getIndex(str, target){
    console.log("Original String : ", str);
    console.log("Index : ", str.indexOf(target));
    console.log("Index : ", str.lastIndexOf(target));
}
getIndex("Hello World World", "World");



function getSlice(str, start, end){
    console.log("Original String : ", str);
    console.log("Slice : ", str.slice(0, 5));
}
getSlice("Hello World", 0, 5);


function getSubstr(str, start, length){
    console.log("Original string : ", str);
    console.log("Substr  :", str.substr(start,length))
}
getSubstr("Hello World", 0, 5);


const str = "Hello World";
console.log(str.replace("World","Javascript")); 


const value = "Hi This is Pratik";
console.log(value.split(" "));


const space_value = "   pratik   ";
console.log(space_value.trim());

const fname = "PRATIK";
console.log(fname.toLowerCase());

const lname = "chilate";
console.log(lname.toUpperCase());
