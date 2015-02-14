
var permArr = [], usedChars = [];
   
function permutations (str) {
  
  var i, ch, chars = str.split("");
 

  //sort chars
  chars.sort();
  for (i = 0; i < chars.length; i++) {
    //get and remove i
    ch = chars.splice(i, 1);
    //add i to the end of used
    usedChars.push(ch);
    //when empty, used -> perm
    if (chars.length == 0) permArr.push(usedChars.join(""));
    //send characters (minus the removed one from above) from char array to be permuted
    permutations(chars.join(""));
    //add removed back into char array in original position
    chars.splice(i, 0, ch);
    //remove the last character used off the end of used characters array
    usedChars.pop();
  }

  return permArr;
}

console.log(permutations("cba"));