function solution(s) {
    var answer = '';
    answer = Array.from(s)
        .sort()
        .reverse()
        .join("");

    return answer;
}