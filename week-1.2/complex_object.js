function checkMaleGender(obj){
    for(let i = 0; i < obj.length; i++){
        if(obj[i]["gender"] == "male"){
            console.log(obj[i]["fname"]);
        }
    }

}

let allUsers = [
    {
        fname : "Pratik",
        gender : "male"
    },
    {
        fname : "bhuvan",
        gender : "male"
    },
    {
        fname : "mohini",
        gender : "female"
    }
]

checkMaleGender(allUsers);