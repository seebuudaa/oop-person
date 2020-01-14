"use strict"

function Person (name, age, gender, interests){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests 
    this.hello = function(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interests}`;
    } 
}

let person = new Person ("Ryan",30, "male", ["being a hardarse","agile","ssd hard drives", "drive"])
let greeting = person.hello();

console.log(greeting)