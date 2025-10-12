function solution(s) {
    const words = [s[0]]; // 지금까지 나온 글자
    var answer = [-1];
    
    for (let i = 1; i < s.length; i++) {
        const last = words.lastIndexOf(s[i]); // 가장 최근의 같은 글자
        
        // 처음 나온 문자
        if (last === -1) answer.push(-1);
        // 이미 나온적 있는 문자
        else answer.push(i - last);
        
        words.push(s[i]);
    }
    
    return answer;
}