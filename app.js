function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
}

sayHello("nico", 10);
sayHello("lynn", 23);
sayHello("marry", 20);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(60, 8);
divide(98, 20);

const player = {
  name: "nico",
  sayHi: function (otherPersonsName) {
    console.log("Hi! " + otherPersonsName + ". Nice to meet you!");
  },
};

console.log(player.name);
player.sayHi("Lynn");
player.sayHi("nico");