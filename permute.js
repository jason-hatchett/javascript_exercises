/*

Given a string, return all the permutations of that string in alphabetical order.

*/
function permutations (str) {
  
  var chars = str.split("");
  var i
  var arr = []

  
  for (i = 0; i < chars.length; i++) {

    var ch = chars.splice(i, 1);
    
    if (chars.length === 0){
      //do nothing
    }
    else if (chars.length == 1){
      arr.push(ch[0] + chars[0])
    }
    else{
      temparr = permutations(chars.join(""));
      for (j=0; j<temparr.length;j++){
        arr.push(ch[0] + temparr[j])
      }
    }
    //add ch back into chars
    chars.splice(i, 0, ch[0]);
  }

  return arr.sort();
}
