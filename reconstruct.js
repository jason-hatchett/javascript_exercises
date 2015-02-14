function reconstruct (changes) {
  // Write your code here, and
  // return your final answer.
  result = [];
  for (var i=0;i < changes.length;i++){
    var curr = changes[i];
    for (var j=0; j < curr.length; j++){
      if (curr[j].type == "add") {
        x = curr[j].text.split("\n");
        x.pop();
        var pos=0
        x.forEach(function(item){
          result.splice(curr[j].line+pos,0,item)
          pos++
        });
      }
      if (curr[j].type == "rem") {
        result.splice(curr[j].line, curr[j].count)
      }
    }
  }
  return result.join("\n") + "\n"
}