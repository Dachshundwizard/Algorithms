// Write a function that given:
// 1. An amount of money
// 2. An array of coin denominations
// compute the number of ways to make amount of money with coins of the avialable denominations.

// Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// We need to find a way to break this down into subproblems.
// Well for each denomination, we can use it once, or twice, or however many times it takes to reach the amount with that coin denom alone
// Psuedocode
// function numberOfWays(amount, denominations){
//     answer = 0;
//     denominations.forEach(denomination){
//         numTimesToUseDenom.forEach()
//     }
// }

function changePossibilitiesBottomUp(amount, denominations){
    var waysOfDoingNcents = [];
    for(var i = 0; i <= amount; i++){
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;
    for (var j = 0; j < denominations.length; j++) {
    var coin = denominations[j];
    for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
        var higherAmountRemainder = higherAmount - coin;
        waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
}

return waysOfDoingNcents[amount];
}

console.log(changePossibilitiesBottomUp(55, [1,2,3]));
console.log(changePossibilitiesBottomUp(500, [1,2,3]));
console.log(changePossibilitiesBottomUp(200000, [1,2,3]));
console.log(changePossibilitiesBottomUp(1, [1,2,3]));
