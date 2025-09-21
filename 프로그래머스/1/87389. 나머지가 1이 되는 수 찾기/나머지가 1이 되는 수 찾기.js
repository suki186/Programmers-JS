const getSmallest = (n) => {
    // 2부터 시작
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return i; // 가장 작은 약수
    }
    return n; // 자기 자신(소수)
}

function solution(n) {
    var answer = 0;
    
    // n-1에서 1을 제외한 가장 작은 약수
    answer = getSmallest(n-1);
    
    
    return answer;
}