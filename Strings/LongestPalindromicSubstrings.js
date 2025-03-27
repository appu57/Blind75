const longestPalindromic = function(s){
    let start = 0;
    let low, high;
    let maxLength = 0;
    if(s.length < 2) return s;
    for(let i = 0; i< s.length; i+=0.5){
        low = Math.floor(i);
        high = Math.ceil(i);
        while(low >= 0 && high < s.length && s[low] === s[high]){ //bbaabb  so start b , low =0 and high =0 b==b true so 1 substring which palindrome , second low=-1 high = 1 stop
            //next low = 1 high =1 now again 1 then low=0 and high=2 false
            //next low=2 high=2 a==a true then low=1 and high = 3 b==afalse 
            low--;
            high++;
        }
        let length = high - low - 1;
        if(length > maxLength){
            maxLength = length;
            start = low + 1;
        }

    }
    return s.substring(start, start + maxLength)
    
}


//whenever longest/shortest substring  is asked use "SLIDING WINDOW WHERE START IS ALWAYS USED"
//https://leetcode.com/problems/minimum-size-subarray-sum/submissions/1048523080/?envType=problem-list-v2&envId=sliding-window
function expendAroundCenter(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}
var longestPalindrome = function(s) {
    if(s.length === 0) return ""; 

    let longest = "";

    for(let i = 0; i < s.length; i++) {
        let odd = expendAroundCenter(s, i, i);
        let even = expendAroundCenter(s, i, i+1);

        if(odd.length > longest.length) longest = odd;
        if(even.length > longest.length) longest = even;
    }

    return longest;

};