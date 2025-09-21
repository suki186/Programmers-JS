/*
    제곱근이 정수이면 true
*/
function solution(n) {
    var answer = 0;
    
    x = Math.sqrt(n);
    answer = Number.isInteger(x) ? (x+1)**2 : -1;
    
    return answer;
}