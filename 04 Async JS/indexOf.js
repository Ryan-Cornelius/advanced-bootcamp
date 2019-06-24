function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let result = 0;

        if (callback(arr[i]) == true){
            result = i;
        } else {
            result = -1;
        }
    }
    return result;
}

var num = 0;
let intervalId = setInterval(function() {
    num++;
    console.log(num);
    if (num === 3) {
        clearInterval(intervalId)
    }
}
));

function countDown(time) {
    let num = time;
    let intervalId = setInterval( function(){
        console.log('Timer: ', num);
        num--;
        if (num === 0) {
            console.log('Ring Ring Ring!!!')
            clearInterval(intervalId);
        }
    }, 1000

    )
}