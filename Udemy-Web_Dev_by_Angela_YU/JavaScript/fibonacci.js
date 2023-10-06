function fibonacci(n){
    var fibArray = [];
    for(var i = 0; i < n; i++){
        if(i <= 1){
            fibArray.push(i);
        }
        else {
            var fibSum = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(fibSum);
        }
    }
    return fibArray;
}
console.log(fibonacci(19));