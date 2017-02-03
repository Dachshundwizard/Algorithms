/////////// concat() ///////////

/////////// Javascript array concat() method ///////////
/////////// returns a new array comprised of ///////////
/////////// this array joined with two or more arrays. ///////////

function concatFunc(){
    var str1 = "I am ";
    var str2 = "demonstrating ";
    var str3 = "how concatination works!";

    var result = str1.concat(str2, str3);
    return result;

}
console.log(concatFunc());

/////////// every() ///////////

/////////// Method tests whether all the elements  ///////////
/////////// in an array passed the test implemented ///////////
/////////// by the provided function. ///////////

function isEven(number, index, array) {
    return number % 2 === 0;
}
console.log([10, 11, 12, 13, 14].every(isEven));
console.log([10, 12, 14, 20, 30].every(isEven));
