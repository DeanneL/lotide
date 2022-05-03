const assertEqual = function(actual, expected) { 
  if (actual !== expected) {
    return ('Assertion Failed `${actual}`');
  } else 
  (actual === expected) {
    return ('Assertion Passed `${expected}`')
  };

};

assertEqual("Lighthouse Labs", "Bootcamp", "Labs");
assertEqual(1, 1) ;

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // will always fail

// test result answer
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); // ensure we get back teo elements
assertEqual(result[0], 'Lighthouse'); //ensure first element
assertEqual(result[1], 'Labs'); //ensure secong element

//TEST CASE
//const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array shoulf still have 3 elements

