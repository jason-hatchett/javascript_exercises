function highestFreq(mystr)  {
  

  var array = mystr.split("");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var hash = new Array(alpha.length);
  for (var i = 0; i < hash.length; i++) hash[i] = 0; 

  var max = 0;
  var answer = "";

  for(i=0;i < array.length; i++){
    hash[alpha.indexOf(array[i])] += 1;
    if (hash[alpha.indexOf(array[i])] > max){
      max = hash[alpha.indexOf(array[i])];
      answer = array[i];
    }
    else if (hash[alpha.indexOf(array[i])] == max){
      
      answer = answer.concat(array[i]);
    }
  }
  var sort_me  = answer.split("");
  sort_me.sort();
  answer = sort_me.join("");

  return answer;
}

console.log(highestFreq("abcdc"));