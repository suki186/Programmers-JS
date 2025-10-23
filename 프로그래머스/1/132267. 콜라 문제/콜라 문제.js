function solution(a, b, n) {
    var answer = 0;
    
    // n개 가지고 있음. a개 가져다주면 b개 줌
    while (n >= a) {
        const num = Math.floor(n / a);
        answer += num * b;
        n = n - num * a + num * b;
    }
    return answer;
}