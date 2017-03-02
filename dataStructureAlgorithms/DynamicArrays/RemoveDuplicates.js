function remove_duplicates(arr){
    var x,
        len = arr.length,
        out = [],
        obj = {}
    for(i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for(x in obj) {
        out.push(x);
    }
    return out;
}
var my_num = [1,2,3,3,4,3,5,6,7,6,5,7,5,8,9,3,2,5,6,7,5,4,3];
result = remove_duplicates(my_num);

console.log(result);
