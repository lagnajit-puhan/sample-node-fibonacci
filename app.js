
const fibseries = function (n)
{
    if(typeof(n)!=="number"){
        return [];
    }
    if(n <= 0 ){
        return [];
    }
    else if(n === 1){
        return [0];
    }
    else if (n === 2){
        return[0,1];
    }
    else{
        var arr = fibseries (n-1);
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
        return arr;
    }
};

module.exports = {
 fibseries
}