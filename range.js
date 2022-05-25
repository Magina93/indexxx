var arr = [1, 4, 11, 2, 37, -4 ]
var smallest = arr[0];
for(var i=1; i<arr.length; i++){
  if(arr[i] < smallest){
    smallest = arr[i];
  }
}
var largest = arr[0];
for(var i=1; i<arr.length; i++){
  if(arr[i] > largest){
    largest = arr[i];
  }
}
console.log(smallest);
console.log(largest);