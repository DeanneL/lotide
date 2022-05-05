  //FUNCTION THAT TAKES TWO ARRAYS AND RETURN TRUE
//CREATE LOGIC TO UPDATE RESULTS

//if letters already added/ add index to existing letter
//add letters to the object(results)

//check indexs
//add index against letter
//letter is the key
//index is value

const letterPositions = function(sentence) {
  const results = {};
for (let i = 0; i < sentence.length; i++) {
  let key = sentence[i];
  let value = i;
if (key in results) {
  value = results[key]
  value.push(i);
  results[key] = value;
} else {
  //if nothing create new key
  results[sentence[i]] = [i];
}
}
//console.log(results);
  return results;
}

assertArrays(letterPositions('hello').e,[1]);

const assertArrayEquals = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('Assertion Passed: ${array1}')
  }

}