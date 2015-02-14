function arrayception(array){

  var max = 0;
  for (var i=0; i < array.length; i++){
    
    if (array[i].length === 0){
      n = 0;
    }
    else if (Array.isArray(array[i])){
      n = arrayception(array[i]);
      if (n>0) n+=1
    }
    else{
      n = 1;
    }
    
    if (n > max) max = n;
  }
  
  return max
  
}