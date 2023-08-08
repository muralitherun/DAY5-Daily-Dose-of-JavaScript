var arr = [1, 2, 3, 4, 5, 6];
var arr2 = [];

for(var i=0; i<arr.length; i++){
    arr2.push(arr[i]**2);
}

console.log(arr);
console.log(arr2);

/*
OUTPUT:
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 4, 9, 16, 25, 36 ]
*/
