/*

Create a function taking a positive integer as its parameter
and returning a string containing the Roman Numeral representation
of that integer.

*/
function RomanNumerals(num){
  var array = num.toString().split("")
  var str = "";
  var symbols = [["I", "V"],["X", "L"],["C", "D"],["M"]];
  
  array = array.map(function(x){
    return parseInt(x)
  })
  
  array.forEach(function(x,i){
    var group = array.length-i-1
    
    if (x == 9){
      str += symbols[group][0] + symbols[group+1][0]
    }
    else{
      
      if (x >= 5){
        str += symbols[group][1]
      }
      while (x > 5){
        str += symbols[group][0]
        x = x-1
      }
      
      if (x==4){
         str += symbols[group][0] + symbols[group][1]
      }
      
      while (x > 0 && x < 4){
        str += symbols[group][0]
        x = x-1
      }
      
    }
    
  })
  return str
}

console.log(RomanNumerals(1666))