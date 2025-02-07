const groupAnagrams = function(strs){
    let sorted = strs.map((str)=>str.split('').sort().join(''));//on sorting tea , eat , ate becomes aet which is easier to check how many times it has been used
    let freq = {};
    for(let i =0;i<length;i++){
        if(freq[sorted[i]]){
            freq[sorted[i]].push(strs[i])
        }else{
            freq[sorted[i]]=strs[i];
        }
    }
    return Object.values(freq);
}