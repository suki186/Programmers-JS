/*
   1. 공백 기준 분리
   "1 2 3" -> ['1', '2', '3']
   2. 숫자 배열로
   ['1', '2', '3'] -> [1, 2, 3]
   3. 최솟값, 최댓값 구하기
*/
function solution(s) {
    var answer = '';

    const arr = s.split(" ").map(x => parseInt(x)); // 1, 2
    answer = `${Math.min(...arr)} ${Math.max(...arr)}`; // 3
    
    return answer;
}