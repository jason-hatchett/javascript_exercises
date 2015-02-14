/*

Given a number n >= 1, write a function that returns 
the nth number in the look-and-say sequence as a string.

*/
function lookAndSay (n) {
  var current;
  
  
  for (var i=1; i <=n; i++){
    //console.log(current)
    if (i == 1) current = "1"
  
    else{
      var array = current.split("")
      var storage = []
      var prev = {}
      for (var j=0;j <array.length; j++){
        //if prev key doesn't equal current key, push prev key and start new prev
        //add to prev key
        if (Object.keys(prev).length == 0){
          prev[array[j]] = prev[array[j]] || 0
        }
        if (Object.keys(prev)[0] == array[j]){
          prev[array[j]] = prev[array[j]]
          prev[array[j]]++
        }
        else{
          storage.push(prev)
          prev = {}
          j = j-1
        }
        
      }
      //push last prev
      
      storage.push(prev)
    //turn storage into string
      var str = ""
      storage.forEach( function(c){
        str +=  c[Object.keys(c)[0]] + Object.keys(c)[0]
      });
     current = str
    }
  }
  return current
}
