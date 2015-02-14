/*

You have 100 doors in a line.
Initially all doors are closed.
You walk through the line of doors 100 times;
always begining with the first door, you open it.
Everytime you stop at a door, 
if the door is closed you open it, 
otherwise (it is open) you close it and continue. 
The first round you stop at every one, 
the second time through you stop on every 2nd. 
The 3rd pass you stop at every third door. 
You continue passing through the doors until 100.

Which doors are open and which are close when you reach 100?

All doors represent an perfect square are open

*/

function doors(num){
  var doorList = []
  for(var i=0;i< num;i++){
    doorList.push(false) //false will be an closed door, true is open
  }

  for(var i=0;i< num;i++){
    doorList = doorList.map(function(x,y){
      
      if ((y+1) % (i+1) == 0){
        x = !x
      }
      return x
    })
  }

  return doorList
}

function fastdoors(num){
  var doorList = []
  for(var i=0;i< num;i++){
    doorList.push(false)
  }
  
  var limit = Math.floor(Math.sqrt(num))
  
  for(var i=0;i< limit;i++){
    doorList[((i+1)*(i+1))-1] = true 
  }
  
  return doorList
}

console.log(fastdoors(100))

console.log(doors(100,100))