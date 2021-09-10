function reverseArray(arr){
    const correctArr = [];
    for (i=arr.length-1;i>=0;i--){
      correctArr.push(arr[i]);
    }
    return correctArr;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  
  