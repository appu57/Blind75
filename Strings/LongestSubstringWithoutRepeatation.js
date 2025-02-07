const longestSubstring = function(str){
    const maxLength =0;
    const left =0;
    const length = str.length;
    let charSet = new Set();
    for(let index = 0 ; index < length ; index++){
        while(charSet.has(str[index])){
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[index]);
        maxLength = Math.max(maxLength ,index - left +1);
    }
    return maxLength;
}


// if(s.length()==0)
//     {
//         return 0;
//     }
//     String answer="";
//     int maxLength=-1;
//     for(int i=0;i<s.length();i++)
//     {
//        String curr=String.valueOf(s.charAt(i));
//        if(answer.contains(curr))
//        {
//            answer=answer.substring(answer.indexOf(curr)+1);
        
//        }
//        answer=answer+curr;
//        maxLength=Math.max(answer.length(),maxLength);
//     }

//    return maxLength;
// }