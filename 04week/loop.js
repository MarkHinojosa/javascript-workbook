"use strict";

const vehicleProgram = () => {
let cars = ['Ford','Chevrolet', 'Subaru', 'BMW'];
console.log(cars);
let morecars = ['Toyota','Mazda', 'Nissan', 'Honda'];
let totalCars = cars.concat(morecars);
console.log(totalCars);
let carsInReverse = totalCars.reverse();

for (let i = 0; i < totalCars.length; i++){
  console.log(carsInReverse[i]);
}
};
vehicleProgram();


const peopleProgram = () => {
let persons = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
}


for (key in persons) {
  console.log(key)
};

for (key in persons){
  if(key === 'birthDate'){
    console.log(persons.birthDate)
  }}
}
peopleProgram();


const numbersProgram = () => {
  i=0;
  while (i < 10){
      i++;
    console.log(i)
  }
  n = 0;
  do {
    n++
    console.log(n)
  }
  while(n < 10);
}
numbersProgram();
