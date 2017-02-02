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

////////////////////////////////////////// INSERTION SORT //////////////////////////////////////////

function insertionSort(array){
    for(var i = 1; i < array.length; i++){
        var tmp = i;
        for(var j = i; j > 0; j--){
            if(array[j] < array[j-1]){
                array[j] = array[j-1];
                array[j-1] = tmp;
            }
        }
    }
    return array;
}
console.log(insertionSort([5,9,12,15]));

////////////////////////////////////////// INSERTION SORT //////////////////////////////////////////

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
