//1
function upperCaser(input) {
  return input.toUpperCase();
}

module.exports = upperCaser

//2
function repeat(operation, num) {
function operation(num){
  console.log(num)
 while(num < 5){
   return num = num + 1,
   operation(num)
 }
}

operation(num);
}

repeat(5, 1);

  //Do not remove the line below
  module.exports = repeat


// 3 convert: to an arry#map

// function doubleAll(numbers){
//   let result = [];
//   const newArr = numbers.map(function(a){
//     return a = a * 2,
//     result.push(a);
//   })
//   return result;
// }
//
//    module.exports = doubleAll


//4

// function lessThanFifty(word){
//   return word.message.length < 50;
// }
//  const getShortMessages = (messages) =>{
// let a =  messages.filter(lessThanFifty);
//
//    return a.map(function(b){
//      return b.message;
//    });
// }
//
// module.exports = getShortMessages


//5
function checkUsersValid(goodUsers) {
goodUsers.map(function(c){
  console.log(c.id)
})
  return function allUsersValid(submittedUsers) {
submittedUsers.map(function(d){
  return d.id
})
  };
}

module.exports = checkUsersValid
