/* Have the function FirstReverse(str) take the str parameter and return it in reversed order*/
function FirstReverse(str) {
    var arr = str.split('');
    arr.reverse();
    return arr.join('');
}

console.log(FirstReverse('hello'));

 //     /\  \         /\  \         /\__\         /\  \         /\  \         /\  \         /\  \
 //    /::\  \       /::\  \       /:/  /        /::\  \       /::\  \       /::\  \       /::\  \
 //   /:/\:\  \     /:/\:\  \     /:/  /        /:/\:\  \     /:/\:\  \     /:/\ \  \     /:/\:\  \
 //  /::\~\:\  \   /::\~\:\  \   /:/__/  ___   /::\~\:\  \   /::\~\:\  \   _\:\~\ \  \   /::\~\:\  \
 // /:/\:\ \:\__\ /:/\:\ \:\__\  |:|  | /\__\ /:/\:\ \:\__\ /:/\:\ \:\__\ /\ \:\ \ \__\ /:/\:\ \:\__\
 // \/_|::\/:/  / \:\~\:\ \/__/  |:|  |/:/  / \:\~\:\ \/__/ \/_|::\/:/  / \:\ \:\ \/__/ \:\~\:\ \/__/
 //    |:|::/  /   \:\ \:\__\    |:|__/:/  /   \:\ \:\__\      |:|::/  /   \:\ \:\__\    \:\ \:\__\
 //    |:|\/__/     \:\ \/__/     \::::/__/     \:\ \/__/      |:|\/__/     \:\/:/  /     \:\ \/__/
 //    |:|  |        \:\__\        ~~~~          \:\__\        |:|  |        \::/  /       \:\__\    
 //     \|__|         \/__/                       \/__/         \|__|         \/__/         \/__/



function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


//     /\  \         /\  \         /\__\         /\  \         /\  \         /\  \         /\  \
//    /::\  \       /::\  \       /:/  /        /::\  \       /::\  \       /::\  \       /::\  \
//   /:/\:\  \     /:/\:\  \     /:/  /        /:/\:\  \     /:/\:\  \     /:/\ \  \     /:/\:\  \
//  /::\~\:\  \   /::\~\:\  \   /:/__/  ___   /::\~\:\  \   /::\~\:\  \   _\:\~\ \  \   /::\~\:\  \
// /:/\:\ \:\__\ /:/\:\ \:\__\  |:|  | /\__\ /:/\:\ \:\__\ /:/\:\ \:\__\ /\ \:\ \ \__\ /:/\:\ \:\__\
// \/_|::\/:/  / \:\~\:\ \/__/  |:|  |/:/  / \:\~\:\ \/__/ \/_|::\/:/  / \:\ \:\ \/__/ \:\~\:\ \/__/
//    |:|::/  /   \:\ \:\__\    |:|__/:/  /   \:\ \:\__\      |:|::/  /   \:\ \:\__\    \:\ \:\__\
//    |:|\/__/     \:\ \/__/     \::::/__/     \:\ \/__/      |:|\/__/     \:\/:/  /     \:\ \/__/
//    |:|  |        \:\__\        ~~~~          \:\__\        |:|  |        \::/  /       \:\__\
//     \|__|         \/__/                       \/__/         \|__|         \/__/         \/__/


function reverseString(str) {

    var newString = "";                                                         // Step 1. Create an empty string that will host the new created string
                                                                                // Step 2. Create the FOR loop The starting point of the loop will be (str.length - 1) which corresponds to the last character of the string,
    for (var i = str.length - 1; i >= 0; i--) {                                 // "o" As long as i is greater than or equals 0, the loop will go on We decrement i after each iteration
        newString += str[i];                                                    // or newString = newString + str[i];
    }
    return newString;                                                           // Step 3. Return the reversed string
}

reverseString('hello');                                                         /* Here hello's length equals 5
                                                                                    For each iteration: i = str.length - 1 and newString = newString + str[i]
                                                                                    First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
                                                                                    Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
                                                                                    Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
                                                                                    Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
                                                                                    Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
                                                                                End of the FOR Loop*/


//     /\  \         /\  \         /\__\         /\  \         /\  \         /\  \         /\  \
//    /::\  \       /::\  \       /:/  /        /::\  \       /::\  \       /::\  \       /::\  \
//   /:/\:\  \     /:/\:\  \     /:/  /        /:/\:\  \     /:/\:\  \     /:/\ \  \     /:/\:\  \
//  /::\~\:\  \   /::\~\:\  \   /:/__/  ___   /::\~\:\  \   /::\~\:\  \   _\:\~\ \  \   /::\~\:\  \
// /:/\:\ \:\__\ /:/\:\ \:\__\  |:|  | /\__\ /:/\:\ \:\__\ /:/\:\ \:\__\ /\ \:\ \ \__\ /:/\:\ \:\__\
// \/_|::\/:/  / \:\~\:\ \/__/  |:|  |/:/  / \:\~\:\ \/__/ \/_|::\/:/  / \:\ \:\ \/__/ \:\~\:\ \/__/
//    |:|::/  /   \:\ \:\__\    |:|__/:/  /   \:\ \:\__\      |:|::/  /   \:\ \:\__\    \:\ \:\__\
//    |:|\/__/     \:\ \/__/     \::::/__/     \:\ \/__/      |:|\/__/     \:\/:/  /     \:\ \/__/
//    |:|  |        \:\__\        ~~~~          \:\__\        |:|  |        \::/  /       \:\__\
//     \|__|         \/__/                       \/__/         \|__|         \/__/         \/__/
