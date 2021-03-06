function validParentheses(s){
    var left = ['(', '{', '[']
    var right = [')', '}', ']']
    var my_arr = []
    for(var i = 0; i < s.length; i++ ){
        if(left.includes(s[i])){
            my_arr.push(s[i])
        }
        if(right.includes(s[i])){
            if(my_arr.length == 0) return false;
            var pre = my_arr.pop();
            if(left.indexOf(pre) != right.indexOf(s[i])) return false;
        }
    }
    return my_arr.length == 0;
}
    var s = "{(})";
    console.log(validParentheses(s))