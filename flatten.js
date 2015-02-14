var array1 = [10, [20, 30], 40];

var array2 = [1,2,[3],4,[5,6]];

var array3 = [[], [], [9]];


var flatten = function(arry){// no depth

  var temp = [];
  var array = arry;
  for (i=0; i < arry.length; i++){

    if (Array.isArray(array[i]) && array[i].length > 0){
      temp = array[i];
      array.splice(i, 1);

      for (j=0;j < temp.length; j++){
        array.splice(i+j, 0, temp[j]);
      }
    }

    else if (Array.isArray(array[i])){
      array.splice(i,1);
      i = i -1;
    }
  }

  return array;

};

console.log(flatten(array3));