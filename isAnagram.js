function isAnagram (a, b) {
  
  var first = a.split("").sort().join("").trim()
  var second = b.split("").sort().join("").trim()
  
  return first == second
  
}
