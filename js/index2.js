var arr = [5,4,3,5,1,2,3];
function arrs (arr){
    arr.sort();
    var res = [arr[0]];
    for(var i=0; i<arr.length;i++){
        if(arr[i] !== res[res.length - 1]){
            res.push(arr[i])
        }
    }
    return res
}
console.log(arrs(arr))