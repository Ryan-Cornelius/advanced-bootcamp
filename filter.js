//Manually implementing filter:
function filter(arr, callback){
    let result = [];
    for (let i = 0; 0 < arr.length; i++){
        if(callback(arr[i], i , arr)){
            result.push(arr[i])
        }
    }
    return result;
}