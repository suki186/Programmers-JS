function solution(n) {
    var answer = [];

    answer = Array.from(String(n), x => parseInt(x)).reverse();

    return answer;
}