function alphaCount (alphabet, text) {
  var counts = Array.apply(null, new Array(alphabet.length)).map(Number.prototype.valueOf,0);
  var alpha = alphabet.toLowerCase();
  var t = text.toLowerCase();
  
  for (i = 0; i < t.length; i++){
    if (alpha.indexOf(t[i]) !== -1){
      counts[alpha.indexOf(t[i])] += 1;
    }
    
  } 
  //console.log(counts);
  
  var answer = "";
  for (i=0; i< alpha.length;i++){
    if (counts[i] !== 0){
      answer = answer + alpha[i] + ":" + counts[i] + ",";
    }
  }
  
  if (answer === ""){
    answer = "no matches";
  }
  else{
    answer = answer.slice(0,-1); //remove last comma
  }
  
  return answer;
  
}