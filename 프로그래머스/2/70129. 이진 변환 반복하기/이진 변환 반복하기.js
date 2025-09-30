function solution(s) {
    var answer = [];
    let changeCount = 0; // 이진 변환 횟수
    let zeroCount = 0; // 제거된 0의 개수
    
    while (s !== "1") {
        const arr = Array.from(s); // 문자열 → 배열
        const filtered = arr.filter(e => e !== "0"); // 0 제거

        zeroCount += arr.length - filtered.length; // 제거된 0의 개수 계산
        changeCount++; // 반복 횟수 증가

        s = filtered.length.toString(2); // 2진수로 변환
    }
    answer = [changeCount, zeroCount];
    
    return answer;
}