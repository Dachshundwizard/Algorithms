// ___      _______  __    _  _______  _______  _______  _______  _     _  _______  ______   ______
// |   |    |       ||  |  | ||       ||       ||       ||       || | _ | ||       ||    _ | |      |
// |   |    |   _   ||   |_| ||    ___||    ___||  _____||_     _|| || || ||   _   ||   | || |  _    |
// |   |    |  | |  ||       ||   | __ |   |___ | |_____   |   |  |       ||  | |  ||   |_|| | | |   |
// |   |___ |  |_|  ||  _    ||   ||  ||    ___||_____  |  |   |  |       ||  |_|  ||    __ || |_|   |
// |       ||       || | |   ||   |_| ||   |___  _____| |  |   |  |   _   ||       ||   |  |||       |
// |_______||_______||_|  |__||_______||_______||_______|  |___|  |__| |__||_______||___|  |||______|

function LongestWord(sen) {
    var arr = sen.match(/[a-z]+/gi);  // This is splitting each word inside the sentance into an array - Now they are indexed
    var sorted = arr.sort(function(a, b) {

        return b.length - a.length; // This function is sorting the array in descending order
    });
    return sorted[0];
}

console.log(LongestWord("yo yo I am a dog mann"));

// ___      _______  __    _  _______  _______  _______  _______  _     _  _______  ______   ______
// |   |    |       ||  |  | ||       ||       ||       ||       || | _ | ||       ||    _ | |      |
// |   |    |   _   ||   |_| ||    ___||    ___||  _____||_     _|| || || ||   _   ||   | || |  _    |
// |   |    |  | |  ||       ||   | __ |   |___ | |_____   |   |  |       ||  | |  ||   |_|| | | |   |
// |   |___ |  |_|  ||  _    ||   ||  ||    ___||_____  |  |   |  |       ||  |_|  ||    __ || |_|   |
// |       ||       || | |   ||   |_| ||   |___  _____| |  |   |  |   _   ||       ||   |  |||       |
// |_______||_______||_|  |__||_______||_______||_______|  |___|  |__| |__||_______||___|  |||______|

function findLongestWord(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
  return words[i];
}

console.log(findLongestWord("I am a monkey"));


// ___      _______  __    _  _______  _______  _______  _______  _     _  _______  ______   ______
// |   |    |       ||  |  | ||       ||       ||       ||       || | _ | ||       ||    _ | |      |
// |   |    |   _   ||   |_| ||    ___||    ___||  _____||_     _|| || || ||   _   ||   | || |  _    |
// |   |    |  | |  ||       ||   | __ |   |___ | |_____   |   |  |       ||  | |  ||   |_|| | | |   |
// |   |___ |  |_|  ||  _    ||   ||  ||    ___||_____  |  |   |  |       ||  |_|  ||    __ || |_|   |
// |       ||       || | |   ||   |_| ||   |___  _____| |  |   |  |   _   ||       ||   |  |||       |
// |_______||_______||_|  |__||_______||_______||_______|  |___|  |__| |__||_______||___|  |||______|

function findLongestWord(str) {
    var words = str.match(/[a-z]+/gi);
    var maxLength = 0;
    for(var i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i];
        }
    }
    return maxLength;
}
console.log(findLongestWord('Helllo poop pants'));
