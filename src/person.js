"use strict"

class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests
    }
    hello = function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interests}`;
    }
}
let person = new Person ("Ryan",30, "male", ["being a hardarse","agile","ssd hard drives", "drive"])


module.exports = Person;