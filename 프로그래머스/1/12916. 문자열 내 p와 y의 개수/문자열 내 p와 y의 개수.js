function solution(s){
    var answer = true;

    s = s.toLowerCase();
    const p = s.split("p").length - 1; // p 개수
    const y = s.split("y").length - 1; // y 개수

    // 비교
    answer = (p == y) ? true : false;

    return answer;
}