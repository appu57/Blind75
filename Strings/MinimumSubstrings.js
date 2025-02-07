// Time complexity: O(S + T)
// Space complexity: O(S + T)
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return "";//because we can not make a subaary of t1 within s1 if s1 is shorter
    }

    const charCount = new Map();
    for (const ch of t) {
        charCount.set(ch, (charCount.get(ch) || 0) + 1);//{A:1,B:1,C:1}
    }

    let targetCharsRemaining = t.length;
    let minWindow = [0, Number.POSITIVE_INFINITY];
    let startIndex = 0;

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const ch = s[endIndex];
        if (charCount.has(ch) && charCount.get(ch) > 0) {
            targetCharsRemaining--; //until we find all chars of t in s keep increasing end index then when we find a "index" .
        }
        charCount.set(ch, (charCount.get(ch) || 0) - 1);//when all entry is now cleared that means we have a substring that has all char of t 
        //  s="ADOBECODEBANC" t="ABC" HERE a , b and c is completed at index 5 so length is end-start +1
        if (targetCharsRemaining === 0) {//until we see "C" we dont enter here
            while (true) {
                const charAtStart = s[startIndex];
                if (charCount.has(charAtStart) && charCount.get(charAtStart) === 0) {//only if start is 0 then only we can move the window from start -> n to start+1 -> end
                    break;
                }
                charCount.set(charAtStart, (charCount.get(charAtStart) || 0) + 1);
                startIndex++;
            }

            if (endIndex - startIndex < minWindow[1] - minWindow[0]) { //so 5-0 is less than Infinity - 0 so now we get 1st subarray whose length is 5 and then 
                //now what happens again the charMap[start] is filled with  1 so again start looping until charMap[start] is 0 so ths way we r moving the window using start and end pointer
    
                minWindow = [startIndex, endIndex];//we r searching for min so again from banc the length is 4 and less when compared to 5 .
            }

            charCount.set(s[startIndex], (charCount.get(s[startIndex]) || 0) + 1);
            targetCharsRemaining++;
            startIndex++;
        }
    }

    return minWindow[1] >= s.length ? "" : s.slice(minWindow[0], minWindow[1] + 1);    
};