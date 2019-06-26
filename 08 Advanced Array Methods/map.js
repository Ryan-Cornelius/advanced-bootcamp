//Manually implementing map:
function map (callback,arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr));
    }
}