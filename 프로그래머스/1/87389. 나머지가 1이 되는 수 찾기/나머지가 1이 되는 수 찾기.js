// 내가 푼 코드: 매우 효율적이지만 길다. 실무/대규모 입력 O(√n)
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

// 단순 구현엔 좋지만 n이 커지면 오래 걸림 O(n)
/*
function solution(n) {
    var answer = 0;
    
    for(var i = 2; i < n; i++) {
        if (n % i === 1) return i;
    }
}
*/