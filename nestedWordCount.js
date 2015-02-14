function nestedWordCount (wordList) {
 //sort wordList
 
 var sortedList = wordList.sort(function (a,b){return b.length-a.length}) //by length to smallest
 console.log(sortedList)
 //array of hashes
 var myNodes = []
 
 //loop through sortedList and try to add into list
 for (i=0; i< sortedList.length ; i++){
   var added = false;
   for(var j = 0; j < myNodes.length; j++) {
      if (myNodes[j].word.toLowerCase().indexOf(sortedList[i].toLowerCase()) != -1) {
        myNodes[j].count += 1
        added = true;
      }
   }
   if (added === false) myNodes.push({word: sortedList[i], count: 1})
   
 }
  
  
var sortans = myNodes.sort(function (a,b){return b.count-a.count})
var value = sortans[0].word
return value
    
}