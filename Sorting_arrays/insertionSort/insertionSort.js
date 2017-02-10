/*    _____________________
    |  _________________  |
    | | QW  3.141592654 | |
    | |_________________| |
    |  __ __ __ __ __ __  |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
*/


//////////////////// INSERTION SORT //////////////////////////////////////////

function sort(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var temp = values[i];
    var j = i - 1;
    for(; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
  return values;
};
console.log(sort([7, 4, 5, 2, 9, 1]));

//////////////////// INSERTION SORT //////////////////////////////////////////


function insertionSort(unsortedList) {
    var len = unsortedList.length;
    for (var i = 0; i < len; i++) {
        var tmp = unsortedList[i]; //Copy of the current element.
        /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            //Shift the number
            unsortedList[j + 1] = unsortedList[j];
        }
        //Insert the copied number at the correct position
        //in sorted part.
        unsortedList[j + 1] = tmp;
    }
}

var ul = [5, 3, 1, 2, 4];
insertionSort(ul);
console.log(ul);


//////////////////// INSERTION SORT //////////////////////////////////////////

function insertionSort(array)
{
    for(var i = 1; i < array.length; i++){
            var currentItem = array[i];
            for(var j = i - 1; j >= 0; j--){
                if(array[j] <= currentItem) break;
                array[j + 1] = array[j];
            }
            array[j + 1] = currentItem;
    }
    return array;
}

console.log(insertionSort([3,4,5,3,2,1]));


//////////////////// INSERTION SORT //////////////////////////////////////////


var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
function insertionSort(array){
    for(var i = 0; i < array.length; i++){
        var temp = array[i];
        var j = i - 1;
        while(j >= 0 && array[j] > temp){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}
console.log(insertionSort(array));

//////////////////// INSERTION SORT //////////////////////////////////////////

function insertion_Sort(arr)
{
for (var i = 1; i < arr.length; i++)
{
  if (arr[i] < arr[0])
  {
    //move current element to the first position
    arr.unshift(arr.splice(i,1)[0]);
  }
  else if (arr[i] > arr[i-1])
  {
    //leave current element where it is
    continue;
  }
  else {
    //find where element should go
    for (var j = 1; j < i; j++) {
      if (arr[i] > arr[j-1] && arr[i] < arr[j])
      {
        //move element
        arr.splice(j,0,arr.splice(i,1)[0]);
      }
    }
  }
}
return arr;
}

console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));

//////////////////// INSERTION SORT //////////////////////////////////////////

function insertionSort(array){
    var temp;
    var j;
    for(var i = 1; i < array.length; i++){
        temp = array[i];
        for(j = i; j > 0 && temp < array[j-1]; j--){
            array[j] = array[j-1];
        }
        array[j] = temp;
    }
    return array;
}
console.log(insertionSort([4,3,6,6,43,66,436,4366]));
