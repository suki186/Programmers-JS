function solution(s){
    const stack = []; // 스택

    for(let i = 0; i < s.length; i++) {
        // 마지막이 (인데 넣으려는게 )이면 안넣고 pop
        if (stack.length > 0 && stack.at(-1) === "(" && s[i] === ")") {
            stack.pop();
        }
        // 스택이 비었거나, (일때 삽입
        else stack.push(s[i]);  
    }

    return stack.length === 0;
}