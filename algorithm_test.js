// 1. given a function logAllValuesFrom1ToX passed x print all values from 1 to x.
// example logAllValuesFrom1ToX(4); would console.log 1,2,3,4 (on separate lines)
function logAllValuesFrom1ToX(x){
    for(var i = 1; i <= x; i++){
        console.log(i);
    }
}
logAllValuesFrom1ToX(10);
// 2.  given an array, using a for loop print all values in the arr.
// printAllValuesOfAnArray(['dojo','ninja',5,4]); would log
// dojo, ninja, 5 ,4
function printAllValuesOfAnArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
printAllValuesOfAnArray(['dojo','ninja',5,4]);

// 3.  return an array with odds 1 - 255;
function createAnArrayWithOdds(){
    var oddArr = [];
    for(var i = 1; i < 256; i++){
        if(i % 2 == 1){
            oddArr.push(i);
        }
    }
    console.log([oddArr]);
}
createAnArrayWithOdds();

// 4.  zero out negatives: given [1,4,-11,12,-1] return [1,4,0,12,0]
function zeroOutNegativeNumbers(arr){
	newArr = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = 0;
			newArr.push(arr[i]);
		} else {
			newArr.push(arr[i]);
		}
	  }
	  console.log(newArr);
	}
	zeroOutNegativeNumbers([1,4,-11,12,-1]);
// 5. Greater than Y print and return the count of elements greater than y.
function greaterThanY(arr, y){
    var count = 0;
    for(var idx = 0; idx < arr.length; idx++){
        if(arr[idx] > y){
            count++;
        }
    }
            console.log("There are %d values greater than the Y value of %d", count, y);
}
greaterThanY([10,-10,4,7,8,0,6],6);
// 6. return the max of an array.
function findMax(arr){
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log("Max is %d", max);
}
findMax([10,-10,4,7,8,0,6]);
// 7. get and print the average of an array
function findAvg(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    console.log("The average is %d.", avg);
}
findAvg([[10,-10,4,7,8,0,6]]);

// 8. Shift array values: given an array move all the values forward by one index and replace the last with 0.

function shiftArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
}
shiftArray([1,2,3,4,5,6,7,8]);


logAllValuesFrom1ToX(10);
printAllValuesOfAnArray(['dojo','ninja',5,4]);
createAnArrayWithOdds();
zeroOutNegativeNumbers([1,4,-11,12,-1]);
greaterThanY([10,-10,4,7,8,0,6],6);
findMax([10,-10,4,7,8,0,6]);
findAvg([[10,-10,4,7,8,0,6]]);
shiftArray([1,2,3,4,5,6,7,8]);
