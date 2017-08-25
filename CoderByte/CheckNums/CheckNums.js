// have the function CheckNums(num1,num2)take both parameters being passed and return the string true if num2 is greater than num1, otherwise return false. If they are the same, return -1

///////////////// Original /////////////////
function CheckNums(num1,num2) {

  if(num1 === num2) {
    return -1;
  }
  if(num1 > num2) {
    return false;
  }
  else {
	return true;
}
}
console.log(CheckNums(4,3));




///////////////// Ternary /////////////////
function CheckNums(num1, num2) {

  // we use a ternary expression to write as little code as possible
  return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;

}

console.log(CheckNums(3, 122));


                            ///////////////// An other Ternary Example /////////////////

                            var now = new Date();
                            var greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");
                            console.log(greeting);


                            var now = new Date();
                            var greeting = "Good";
                            if (now.getHours() > 17) {
                              greeting += " evening.";
                            }
                            else {
                              greeting += " day.";
                            }

                            console.log(greeting);




///////////////// Other /////////////////
function CheckNums(num1,num2) {

  if (num1 == num2) {
     return "-1";
  }
  else {
    return (num2 > num1);
  }
}

console.log(CheckNums(3, 4));
