/*
    짝수: "수박" * 몫
    홀수: "수박" * 몫 + "수"
*/

function solution(n) {
    let answer = '';
    const wm = "수박";
    
    answer = wm.repeat(Math.floor(n / 2));
    answer = n % 2 == 0 ? answer : answer + "수";
    
    return answer;
}