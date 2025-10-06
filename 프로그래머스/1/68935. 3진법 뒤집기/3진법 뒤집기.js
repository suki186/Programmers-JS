function solution(n) {
    var answer = 0;

    // 3진수 -> 문자열 -> 배열 -> 앞뒤반전 -> 합치기
    //n = String(n.toString(3)).split('').reverse().join('');
    n = [...n.toString(3)].reverse().join("");
    answer = parseInt(n, 3); // 3진법 -> 10진법
    
    return answer;
}