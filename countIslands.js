/*

Given a string representation of a 2d map, return the number of islands in the map.
Land spaces are denoted by a zero, while water is denoted by a dot. 
Two land spaces are considered connected if they are adjacent (but not diagonal).

*/
function countIslands (mapStr) {
  
  var counter =0;
  
  var first = mapStr.split("\n")
  var array = [];
  first.forEach(function(item){
    array.push(item.split(""));
  })
  
  
  for(var i=0;i<array.length;i++){
    for (var j=0; j <array[i].length; j++){
      //console.log(i + ", " + j)
      if (array[i][j] == "0"){
        //console.log("found: " + i + ", " + j)
        if (i > 0 && array[i-1][j] !== "0" && j > 0 && array[i][j-1] !=="0"){
          counter++;
          //console.log("added")
        }
        else if( i === 0 && j > 0 && array[i][j-1] !== "0"){
          counter++;
          //console.log("added")
        }
        else if( j === 0 && i > 0 && array[i-1][j] !== "0"){
          counter++;
          //console.log("added")
        }
        else if (i === 0 && j === 0){
          counter++;
          //console.log("added")
        }
        else if(i > 0 && array[i-1][j] === "0" &&  j > 0 && array[i][j-1] === "0" && array[i-1][j-1] !== "0"  ){
          counter--;
          //console.log("removed for connection")
        }
      }
      
    }
  }
  
  return counter;
  
}