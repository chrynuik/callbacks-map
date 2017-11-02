var words = ["ground", "control", "to", "major", "tom"];

function map(array, functionExecuted) {

  var outArray = [];

  array.forEach(function(words) {
    outArray.push(functionExecuted(words));
  });

  return outArray;

 // console.log(outArray);

}
//console.log(map);
var output= map(words, function(word) {
  return word.length;
});

console.log(output);

var toUpper = map(words, function(word) {
  return word.toUpperCase();
});

console.log(toUpper);

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(reverse);

//what does map function do? it created a new array from what ever you called on each element in array