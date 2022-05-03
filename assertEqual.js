const assertEqual = function(actual, expected) { 
  if (actual !== expected) {
    return ('Assertion Failed: [actual]');
  } else 
  (actual === expected) {
    return ('Assertion Passed: [expected]')
  };

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1) ;
assertEqual(<3<3<3, :):):));








const sum = function(a, b) {
  return a + b;
};

console.assert(sum(1,2) === 3);
console.assert(sum(1, 20) === 3);


const sumBuggy = function( a, b) {
  return a * b;
}
console.assert(sumBuggy(1, 2) === 3);
