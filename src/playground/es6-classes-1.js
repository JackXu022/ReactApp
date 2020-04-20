class Person {
    //default name
    constructor(name = 'Anonymous', age = 0){
        //this.name = name || 'test';
        this.name = name;
        this.age = age;
    }
    getGretting(){
        //return this.name;
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let description = super.getGretting();
        if(this.homeLocation){
            description += ` I'm visiting from ${this.homeLocation}.`;
        }
        return description;
    }
}

const me = new Traveler('Zhaopeng Xu', 22, 'china');
console.log(me.getGretting())
const other = new Traveler();
console.log(other.getGretting());