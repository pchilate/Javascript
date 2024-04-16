 class Animal {
    constructor(name,legCount, speaks){
        this.name = name;
        this.legCount =legCount;
        this.speaks = speaks;
    }

    static myType(){
        return "Animal";
    }
    speak(){
        console.log("Hi there : ", this.speaks);
    }
}


console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("ca", 4, "meow");
dog.speak();