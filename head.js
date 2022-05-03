const assertEqual = function(actual, expected) { 
  if (actual !== expected) {
    return ('Assertion Failed `${actual}`');
  } else 
  (actual === expected) {
    return ('Assertion Passed `${expected}`')
  };

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1) ;

const head = function() {
  assertEqual(head([5,6,7]), 5);
  return (assertEqual.head);
}

console.log(head);