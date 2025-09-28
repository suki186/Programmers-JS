function solution(s) {
    var answer = '';
    answer = Array.from(s)
        .sort()
        .reverse()
        .join("");
    
    // Array.from(s) 대신 s.split("")도 가능

    return answer;
}