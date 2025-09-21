function solution(a, b) {
    var answer = 0;
    
    // a가 더 크다면 swap
    if (a > b) {
        [b, a] = [a, b]
    }
    // a부터 b까지의 합
    for (var i = a; i <= b; i++) {
        answer += i;
    }
        
    return answer;
}