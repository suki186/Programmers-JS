/*
    제곱근이 정수 = 약수의 개수가 홀수
*/
function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <= right; i++) {
        // 홀수면 빼고 짝수면 더하기
        Number.isInteger(Math.sqrt(i)) ? answer -= i : answer += i;
    }
    
    return answer;
}