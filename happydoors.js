/*

Happy numbers are positive integers that follow a particular formula: 
take each individual digit, square it, and then sum the squares to get a new number. 
Repeat with the new number and eventually, you might get to a number whose squared sum is 1. 
This is a happy number. 
An unhappy number (or sad number) is one that loops endlessly. 
Write a function that determines if a number is happy or not.

*/


function happyNum(x){
  var indi= x.toString();
  indi = indi.split("")

  var sum = 0;

  indi.forEach(function(y){
    sum += (parseInt(y)*parseInt(y))
  })

  if (sum == 1) return true

  else if (sum < 5) return false

  else return happyNum(sum)

}

console.log(happyNum(2))
console.log(happyNum(7))
console.log(happyNum(986543210))