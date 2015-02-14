function validateISBN (string) {
  var str = string.split("-").join("")
  
  var sum = 0;
  for (var i=0;i<str.length;i++){
    if (i != 9 && str[i] != 'X' && i <= 9){
      
      sum += parseInt(str[i] * (10-i))
      
    }
    else if(i == 9){
      if (str[i] == 'X'){
        sum += 10
      }
      else{
        sum += parseInt(str[i])
      }
    }
    else{
      return false
    }
  }
  
  if (sum % 11 === 0){
    return true
  } 
  
  return false
}