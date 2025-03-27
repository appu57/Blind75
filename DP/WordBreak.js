const wordBreak = function(str , wordDict){
    let tails = new Array(str.length+1).fill(false);
    tails[0]= true;
    let length = str.length;
    for(let i=1;i<length;i++){ //because 1st should be true
      for(let word of wordDict){
        let start = word.length - i;
        if(start>=0  && tails[start]  && str.substring(start,i).equals(word)){ //only if tails[start] is true u can proceed if false that means that char is part of another word
            tails[index]=true;//move the start pointer once u find first word
            break;
        }
      }
    }
    return tails[length];

}

// I=1 ; start = 1 – 4 = -3 [leet]​

// I=1 ; start = 1 – 4 = -3 [code]​

// ​

// I=2; start = 2-4=-2[leet]​

// I=2; start = 2-4=-2[code]​

// ​

// I=3; start = 3-4=-1[leet]​

// I=3; start = 3-4=-1[code]​

// I=4; start = 4-4=0[leet] ; start>=0 ; dp[0] && leetcode.substring(0,4).equals(w)== leet​

// I=4; start = 4-4=0[code];start>=0 ; dp[0] && leetcode.substring(0,4).equals(w)false != code​

// I=5; start = 5-4 =1[code];start>=1; dp[1] is false will not enter if​

// I=6 ; start = 6-4=2;start>=1;dp[2]false​

// I=7 ; start = 7-4=3;start>=1;dp[3] false​

// I=8 ; start = 8-4=4;start>=1;dp[4]true && leetcode.substring(4,8).equals(w)!= leet​

// I=8 ; start = 8-4=4;start>=1;dp[4]true && leetcode.substring(4,8).equals(w)== code