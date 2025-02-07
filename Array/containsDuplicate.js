function containsDuplicate(nums){
    let map ={};
    let length = nums.length;
    for(let i=0;i<length;i++){
       if(map[nums[i]] == undefined){
         map[nums[i]] = i;
       }else{
        return true;
       }
    }
    return false;

}
console.log(containsDuplicate([1,2,3,4]))