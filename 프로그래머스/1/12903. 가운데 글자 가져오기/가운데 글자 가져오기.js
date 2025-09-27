function solution(s) {
    var answer = '';
    index = Math.floor(s.length/2);
    
    // s가 홀수이면 /2, 짝수이면 /2-1,/2
    answer = s.length % 2 == 0 ? s[index-1]+s[index] : s[index];
    
    return answer;
}