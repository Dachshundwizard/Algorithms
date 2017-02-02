// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:
//
//   [1, 7, 3, 4]
//
// your function would return:
//
//   [84, 12, 28, 21]
//
// by calculating:
//
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
//
// intArray = [3,1,2,5,6,4];
// var productsOfAllIntsBeforeIndex = [];
//
// // for each integer, find the product of all the integers
// // before it, storing the total product so far each time
// var productSoFar = 1;
// for (var i = 0; i < intArray.length; i++) {
//   productsOfAllIntsBeforeIndex[i] = productSoFar;
//   productSoFar *= intArray[i];
// }
//
// console.log(productsOfAllIntsBeforeIndex);

function getProductsOfAllIntsExceptAtIndex(intArray) {

  var productsOfAllIntsExceptAtIndex = [];

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  var productSoFar = 1;
  for (var i = 0; i < intArray.length; i++) {
      productsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar *= intArray[i];
  }

  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (var j = intArray.length - 1; j >= 0; j--) {
      productsOfAllIntsExceptAtIndex[j] *= productSoFar;
      productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}
console.log(getProductsOfAllIntsExceptAtIndex([1,1,1,4,1,4]));
