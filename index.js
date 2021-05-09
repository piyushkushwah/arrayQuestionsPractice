let arr = [1,2,3,4,5,6,7,8,9];

function shiftArray(arr){
  
  let j = arr.length - 1;
  let temp = arr[j];

 arr.map((element,index)=>{
    if(j > Math.floor(arr.length/2) -1){
        arr[j] = arr[index]
        arr[index] = temp;
        j--;
        temp = arr[j];
    }
  });

  return arr;

}


shiftArray(arr);
