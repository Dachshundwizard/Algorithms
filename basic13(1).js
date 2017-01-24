Basic 13
////////////////////////////////////////// 13
function shiftArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[i-1]=0;
    console.log(arr);
}
var nums = [1,2,3,4];
shiftArray(nums);

////////////////////////////////////////// 12
function swapNeg(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = "Dojo";
		}
	}
    console.log(arr);
}
swapNeg([2,3,-4,3]);
////////////////////////////////////////// 11 max min avg
function minMaxSum(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    console.log([max,min,avg]);
}
minMaxSum([2,3,4]);

//////////////////////////////////////////
function shiftArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[i-1]=0;
    console.log(arr);
}
var nums = [1,2,3,4];
shiftArray(nums);
//////////////////////////////////////////
function swapNeg(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < 0){
			arr[i] = "Dojo";
		}
	}
    console.log(arr);
}
swapNeg([2,3,-4,3]);
function greaterY(arr,y){
    var count = 0;
    for(var i = 0; i < arr.length;i++){
        if(arr[i]>y){
            count+=1;
        }
    }
    console.log(count);
}
greaterY([1,2,3],0);

//////////////////////////////////////////

function makeItBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "BIG";
        }
    }
}
var myArr = [2,-4,2];
makeItBig(myArr);
console.log(myArr);

//////////////////////////////////////////

function previousLength(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length -1].length;
    for(var i = 1; i < arr.length; i++){
        var temp2 = arr[i];
        arr[i] = temp.length;
        temp = temp2;
    }
}
var myArr= ["good","bad","ugly"];
previousLength(myArr);
console.log(myArr);

//////////////////////////////////////////

function reverseArray(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length -i -1];
        arr[arr.length -i -1] = temp;
    }
}
var myArr = [1,2,3,4,5];
reverseArray(myArr);
console.log(myArr);

//////////////////////////////////////////


var negArr = [3,3,-1];
function onlyNeg(arr){
    var arr = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = -arr[i];
        }
    }
}
onlyNeg(negArr);
console.log(negArr);
