/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var array = [];
    for(let p = 0; p < arr.length; p++){
        let selected = fn(arr[p], p)
            if(selected) array.push(arr[p])
    }
    return array;
};