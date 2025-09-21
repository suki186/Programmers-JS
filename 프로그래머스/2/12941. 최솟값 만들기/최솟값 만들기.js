/*
    제일 작은수 * 제일 큰 수
*/
function solution(A,B){
    var answer = 0;
    
    // A: 오름차순, B: 내림차순
    A = A.sort((a, b) => a - b); 
    B = B.sort((a, b) => b - a);

    for (var i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}