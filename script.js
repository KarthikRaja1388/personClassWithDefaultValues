class Person {
  name;
  age;

  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

let btnGetDetails = document.querySelector(".btn-get-details");
let nameElementNode = document.querySelector(".name");
let ageElementNode = document.querySelector(".age");
let display = document.querySelector(".display");

btnGetDetails.addEventListener("click", () => {
  let name = nameElementNode.value;
  let age = ageElementNode.value;
  let person;

  if (name !== "" && age !== "") {
    person = new Person(name, age);
  } else {
    person = new Person();
  }

  console.log(person.getDetails());
  display.textContent = person.getDetails();
});
