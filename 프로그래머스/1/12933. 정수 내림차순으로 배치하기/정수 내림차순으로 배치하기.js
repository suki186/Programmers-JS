function solution(n) {
    var answer = 0;
    
    // n -> 문자열 배열 -> 내림차순
    const arr = Array.from(String(n)).sort((a, b) => b - a);
    // 배열 -> 문자열 -> 숫자
    answer = Number(arr.join(""));
    
    return answer;
}