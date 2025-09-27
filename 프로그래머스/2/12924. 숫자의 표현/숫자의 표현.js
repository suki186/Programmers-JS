function solution(n) {
    var answer = 0;
    
    /* 시간초과
    // 1부터 n까지
    for (let i = 1; i <= n/2+1; i++) {
        let sum = 0;
        // n안넘을때까지 더하기
        for (let j = i; sum < n; j++) {
            sum += j;
        }
        // 더한값이 n이면 카운트
        if (sum === n) answer++;
    }
    */
    
    // 연속된 자연수 합 개수 = 홀수 약수의 개수
    for (let i = 1; i <= n; i+=2) {
        if (n % i == 0) answer++;
    }
    
    return answer;
}