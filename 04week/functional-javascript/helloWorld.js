//1
// function upperCaser(input) {
//   return input.toUpperCase();
// }
//
// module.exports = upperCaser
//
// //2
// function repeat(operation, num) {
// function operation(num){
//   console.log(num)
//  while(num < 5){
//    return num = num + 1,
//    operation(num)
//  }
// }
//
// operation(num);
// }
//
// repeat(5, 1);

  // Do not remove the line below
  // module.exports = repeat


//3 convert: to an arry#map

function doubleAll(numbers){
  let blankArr = [];
  const newArr = numbers.map(function(a){
    return a = a * 2,
    blankArr.push(a);
  })
  return console.log(blankArr);
}

   module.exports = doubleAll
