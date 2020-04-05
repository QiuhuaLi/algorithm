function sort(arr){
    let isSorted = true;
    let rightBorder = arr.length-1, leftBorder = 0; // 比较的边界分左右
    let lastChangeIndex = 0; // 最后一次交换的位置， 这个一定要有的！
    for(i = 0;i < arr.length/2; i++){
       for(j = leftBorder; j < rightBorder; j++){
         if(arr[j] > arr[j+1]){
           temp = arr[j];
           arr[j] = arr[j+1];
           arr[j+1] = temp;
           isSorted = false;
           lastChangeIndex = j;
         }
       }
      rightBorder = lastChangeIndex;
      if(isSorted){
        break;
      }
      isSorted = true;
      for(j = rightBorder; j > leftBorder;  j--){
        console.log(j)
        if(arr[j] < arr[j-1]){
           temp = arr[j];
           arr[j] = arr[j-1];
           arr[j-1] = temp;
           isSorted = false;
           lastChangeIndex = j;
         }
      }
      leftBorder = lastChangeIndex;
      if(isSorted){
        break;
      }
    }
    return arr;
  }
console.log(sort([3,4,2,1,5,9,7,6]))