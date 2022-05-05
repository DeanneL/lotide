///omg get my assertEqual function together because UUUGGGHHHH



//create function



//iterate through a string
//return count of each letters into an object
//

const countLetters = function(string) {
  const results = {};
  ////interate through the string
  ////should i be using a *for in* (index loop?)
for (let i = 0; i < string.length; i++) {
  let key = string[i];
  let value = i;
  /////return count of each letters into an object
if (key in results) {
  value = results[key]
  ////push the value out of the function
  value.push(i);
  results[key] = value;
} else {
 
  results[string[i]] = [i];
}
}
//console.log(results);
  return results;
}
