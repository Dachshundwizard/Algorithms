// function isEven(x){
//     for(var i = 0; i < x.length; i++){
//         if(x[i] % 2 == 0){
//             console.log('true');
//         }else{
//             console.log('false');
//         }
//         }
//     }
// isEven([1,2,3,4,5,6,7]);



var isEven = function(x){
    console.log(x);
    return (x % 2 == 0) ? true : false;
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

////// 'every' method ///////
// This will iterate through each element until it hits false
numbers.every(isEven);
////// 'some' method ///////
// This will iterate through each element until it hits true
numbers.some(isEven);
////// 'forEach' method ///////
// This will iterate through each element
numbers.forEach(function(x){
    console.log((x % 2 == 0));
});
////// 'map' method ///////
// This is an iterator method that returns a new array with a array result. Stores the result
var myMap = numbers.map(isEven);
console.log(myMap);
////// 'filter' method ///////
// It returns a new array with the elements that the function returned as true.
var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

////// 'reduce' method ///////
// Receives a function with the following parameters: previousValue, currentValue,
// We can use this function to return a value that will be added to an accumulator, which is going to be returned after the reduce method stops being executed.
// it can be very useful if we want to sum up all the values in an array
var qqq = numbers.reduce(function(previous, current, index){
    return previous + current;
});
console.log(qqq);
