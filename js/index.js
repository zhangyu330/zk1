var arr = [1,2,5,4,2,3,1];
var brr = [];
function array(arr){
    for(var i=0;i<arr.length;i++){
        if(brr.indexOf(arr[i]) == -1){
            brr.push(arr[i])
        }
    }
    return brr;
}
console.log(array(arr));