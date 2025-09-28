// 재귀함수는 js, python에서 시간초과 -> 반복문으로
function solution(n) {
    let arr = [0, 1];
    
    if(n < 2) return arr[n];
    
    for(let i = 2; i <= n; i++) {
        arr.push((arr[i-1] + arr[i-2])  % 1234567);
    }
    
    // %를 여기서 딱 한번 하면 overflow
    return arr[n];
}