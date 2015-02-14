function cipher (alpha, offset, message, command) {

  var output = "";
  
  if (command == "encode"){
    for (i=0;i < message.length; i++){
     if (alpha.indexOf(message[i]) != -1){
       output += alpha[(alpha.indexOf(message[i]) + offset) % alpha.length];
     }
      else output += message[i]
    }
  }
  
  if (command == "decode"){
    for (i=0;i < message.length; i++){
      if (alpha.indexOf(message[i]) != -1){
       output += alpha[(alpha.indexOf(message[i]) + alpha.length - offset % alpha.length) % alpha.length];
     }
      else output += message[i]
    }
  }
  
  return output;
}