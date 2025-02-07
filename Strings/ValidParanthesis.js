const validParathesis = function(str){
    let symbols = {"(":")","}":"{"};
    let stack =[];
    for(let sym in str){
        if(symbols[sym]){//opening 
            stack.push(symbols[sym])// push closing if ( then push ) and check if stack top has ( 
        }else if(stack.length > 0 && stack[stack.length]-1 == sym){
            stack.pop();
        }else{
            return false;
        }
    }
    return true;
}