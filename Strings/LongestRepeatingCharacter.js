const longestRepeatingCHaracterREplacement = function(str , k){
    let start = 0; //to find max length of an array/string after replacement
    let frequencyMap = {};//26 index to hold frequency of alphabets
    let length = str.length;
    let maxCharAvailable = 0;
    let longest = 0;
    for(let i=0;i<length;i++){
        if(!frequencyMap[str[i]])//if it doesnt exist
        {
           frequencyMap[str[i]]=0;
        }
        frequencyMap[str[i]]++; //increase the occurence of char in a string;
        let maxLengthFromStart = (i - start + 1)//maxLength at ith index from start
        maxCharAvailable = Math.max(max , frequencyMap[s[i]])//available char to replace
        let isValid = maxLengthFromStart - maxCharAvailable <=k; //if maxlength of considered sliding window - max char available to replace is <= k then we can replace so find maxLength
        if(isValid){
            frequencyMap[s[start]]--; //we replaced starting character to some A when i was at 3 now when i is at 4 we can also change it B if it is valid
            start++;//because we r considering subarray once changed means we can not replace it with other to match some other char
        }
        longest = Math.max(longest ,  i - start +1)

    }
    return longest;
}