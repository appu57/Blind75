const validAnagram = function(s1 , s2){
    let sLength1 = s1.length;
    let s2Length = s2.length;
    if(sLength1 != s2Length){
        return false;
    }
    let frequencyMapS1 = {};
    for(let i =0 ;i< sLength1 ; i++)
    {
         if(!s1[i]) frequencyMapS1[s1[i]]=0;
         if(!s2[i]) frequencyMapS1[s2[i]] =0;
         frequencyMapS1[s1[i]]++;//increase
         frequencyMapS1[s2[i]]--;//reduce , if both string are same then the map will hold no incremented value
    }
    for(let s in s1){
        if(frequencyMapS1[s] !== 0){
            return false;
        }
    }
    return true;
}