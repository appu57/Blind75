function twoSum(arr,target){
    let map = {};
    let output=[];let j=0;
    let length = arr.length;
    for(let i=0;i<length;i++)
    {
       let curr = arr[i];
       let value = target - curr;
       if(map[value] !== undefined){
          return [map[value],i];//we have to return index not value
       }else{
         map[curr] = i;
       }
       console.log(map)
    }
}
let arr = [2,7,9,11];
console.log(twoSum(arr,9));