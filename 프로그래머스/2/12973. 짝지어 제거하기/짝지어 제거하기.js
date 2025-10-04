function solution(s)
{
    const stack = []; // 스택
    
    for(const e of s) {
        if(e === stack[stack.length-1]) stack.pop();
        else stack.push(e);
    }

    return stack.length === 0 ? 1 : 0;
}