/* Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.

*/

///////// MergeSort ///////// ///////// ///////// ///////// ///////// /////////
function mergeSortedArray(arr1, arr2){
    let newArr = [];
    let i = 0;
    let k = 0;
    while(i<arr1.length && k<arr2.length){
        if(arr1[i] < arr2[k]){
            newArr.push(arr1[i]);
            i++;
        }
        else{
            newArr.push(arr2[k]);
            k++
        }
    }
    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++
    }
    while(k < arr2.length){
        newArr.push(arr2[k]);
        k++
    }
    return newArr;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let arr1 = arr.slice(0, Math.floor(arr.length/2));
    let arr2 = arr.slice(Math.floor(arr.length/2), arr.length)
    return mergeSortedArray(mergeSort(arr1), mergeSort(arr2))
}

let arr = [1,5,4,3,2,7,6,5];
console.log(mergeSort(arr));

///////// MergeSort ///////// ///////// ///////// ///////// ///////// /////////

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function mergeSorting(array) {
    if(array.length < 2) {
        return array;
    }

    var middle = Math.floor(array.length / 2);
    var left   = array.slice(0, middle);
    var right  = array.slice(middle);

    return mergeSort(mergeSorting(left), mergeSorting(right));
}

function mergeSort(left, right) {
    var array = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return array.concat(left.slice()).concat(right.slice());
}
console.log(mergeSorting(array));


///////// MergeSort ///////// ///////// ///////// ///////// ///////// /////////

function merge_sort(left_part,right_part)
{
  var i = 0;
  var j = 0;
  var results = [];

  while (i < left_part.length || j < right_part.length) {
      if (i === left_part.length) {
          // j is the only index left_part
          results.push(right_part[j]);
          j++;
      }
    else if (j === right_part.length || left_part[i] <= right_part[j]) {
          results.push(left_part[i]);
          i++;
      } else {
          results.push(right_part[j]);
          j++;
      }
  }
  return results;
}

console.log(merge_sort([1,3,4], [3,7,9]));


/*
quu..__
 $$$b  `---.__
  "$$b        `--.                          ___.---uuudP
   `$$b           `.__.------.__     __.---'      $$$$"              .
     "$b          -'            `-.-'            $$$"              .'|
       ".                                       d$"             _.'  |
         `.   /                              ..."             .'     |
           `./                           ..::-'            _.'       |
            /                         .:::-'            .-'         .'
           :                          ::''\          _.'            |
          .' .-.             .-.           `.      .'               |
          : /'$$|           .@"$\           `.   .'              _.-'
         .'|$u$$|          |$$,$$|           |  <            _.-'
         | `:$$:'          :$$$$$:           `.  `.       .-'
         :                  `"--'             |    `-.     \
        :##.       ==             .###.       `.      `.    `\
        |##:                      :###:        |        >     >
        |#'     `..'`..'          `###'        x:      /     /
         \                                   xXX|     /    ./
          \                                xXXX'|    /   ./
          /`-.                                  `.  /   /
         :    `-  ...........,                   | /  .'
         |         ``:::::::'       .            |<    `.
         |             ```          |           x| \ `.:``.
         |                         .'    /'   xXX|  `:`M`M':.
         |    |                    ;    /:' xXXX'|  -'MMMMM:'
         `.  .'                   :    /:'       |-'MMMM.-'
          |  |                   .'   /'        .'MMM.-'
          `'`'                   :  ,'          |MMM<
            |                     `'            |tbap\
             \                                  :MM.-'
              \                 |              .''
               \.               `.            /
                /     .:::::::.. :           /
               |     .:::::::::::`.         /
               |   .:::------------\       /
              /   .''               >::'  /
              `',:                 :    .'
*/
