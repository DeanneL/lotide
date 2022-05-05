const countOnly = function(allItems, itemsToCount) {
  for (let i = 0; i < allItems.length; i++) 
  for (let j = 0; j < itemsToCount.length; j++
    return (allItems[i]);
    return (itemsToCount[j]);
    
    const results = allItems[i] + itemsToCount[j];
    
  } 
  console.log('printing instances', countOnly, results);

  break;
  //// count instances in an object
  //for loop to interate through
  ///return number of instances/strings
  //print number
};
console.log('printing instances', countOnly, combinedCount);
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

const countOnly = function(allItems, itemsToCount) {
  const results = {};

 // for (const item of allItems) {
 //   console.log(item);
 // }

 //// return results;
//}

//if (results[item]) {
  //results[item] += 1;
//} else {
  //results[item] = 1;

  //if (itemsToCount[item]) { 
    //if (results[item]) {
      //results[item] += 1;
    //} else {
      //results[item] = 1;
    //}
  // }