//Manually implementing forEach:

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    };
    return undefined;
};