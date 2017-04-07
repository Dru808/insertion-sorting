/*jshint esversion: 6*/
function insertionSorting(arr) {

  var holder = null;
  var holder2 = null;
  var h;

  for(i = 1; i < arr.length; i++) {
    if(arr[i] <= arr[i - 1]) {
      holder = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = holder;
      h = i;
      while(arr[h - 1] <= arr[h - 2]) {
        console.log('is it looping?');
        holder2 = arr[h - 1];
        arr[h - 1] = arr[h - 2];
        arr[h - 2] = holder2;
        h--;
      }
    }
  }
  console.log('what is in array? ', arr);
}

module.exports = insertionSorting;