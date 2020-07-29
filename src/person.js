

const gender = document.getElementById('gender'),
        enteredGender = gender.value,
        interests = document.getElementById('interests'),
        enteredInterests = interests.value,
        form = document.getElementById('user-input'),
        userNameInput = document.getElementById('name'),
        enteredName = userNameInput.value,
        ageInput = document.getElementById('age'),
        enteredAge = ageInput.value;
 


 class Person {
    constructor(enteredName, enteredAge, enteredGender, interests) {
        this.name = enteredName;
        this.age = enteredAge;
        this.gender = enteredGender;
        this.interests = interests
    }
    hello () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interests}`;
    }
}
let person = new Person (enteredName, enteredAge, enteredGender, [enteredInterests + " and  ssd hard drives"]),
    greeting = person.hello();






console.log(greeting)



function signupHandler(event) {
  event.preventDefault();
  const user = {
    name: enteredName,
    age: enteredAge,
    gender: enteredGender,
    interests: enteredInterests
  };

  document.getElementById("user").innerHTML = greeting
 
}

form.addEventListener('submit', signupHandler);

module.exports =  Person  ;


