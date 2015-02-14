function rainsaved(array){

var curr_tall = array[0]
var pool = 0
var total = 0
var len = array.length
var last_check = len-1
var end_height = array[last_check]

for (i=1; i < len;i++){
  if (i == last_check+1) return total
  
  if (array[i] < curr_tall){ 
    pool +=  (curr_tall - array[i])
    
  }
  else{
    curr_tall = array[i]
    total += pool
    pool = 0
    
    if (curr_tall > end_height){
      
      
      for (j=last_check; j >= i ;j--){
        if (end_height > curr_tall) break;
        if (array[j] < end_height){
          pool +=  (end_height - array[j])
        
        }
        else{
          end_height = array[j]
          last_check = j
          total += pool
          pool = 0
        }
      }
    }
  }
}
pool =0
if (total === 0 && curr_tall == array[0] ){
  
  for (j=last_check; j > 0 ;j--){
    
        if (array[j] < end_height){
          pool +=  (end_height - array[j])
        }
        else{
          end_height = array[j]
          total += pool
          pool = 0
        }
      }
}
  
  return total
}