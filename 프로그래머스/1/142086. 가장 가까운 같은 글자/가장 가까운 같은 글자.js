function solution(s) {
    const words = [s[0]]; // 지금까지 나온 글자
    var answer = [-1];
    
    for (let i = 1; i < s.length; i++) {
        const last = words.lastIndexOf(s[i]); // 가장 최근의 같은 글자
        
        // 이미 나온적이 있다면 i-last
        last === -1 ? answer.push(-1) : answer.push(i-last);
        
        words.push(s[i]);
    }
    
    return answer;
}