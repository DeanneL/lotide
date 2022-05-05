//// implement def for func take in 2 objects
//returns true if both objects have identical keys
//else false
///solve for primitive values
const eqObjects = function( object1[i], object2[j] )
///is object.keys a better method instead?
{
  var same = (object1[i] === object2[j])
  for (let i = 0; i < object1.length; i++);
  for (let j = 0; j < object2.length; j++);
  if (same = true) {

  } else {
    return false;
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); 