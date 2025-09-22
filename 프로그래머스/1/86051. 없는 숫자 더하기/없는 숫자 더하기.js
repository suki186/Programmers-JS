function solution(numbers) {
    const SUM = 45; // 0~9 합
    var answer = 0;
    // 전체 합에서 현재 배열 합 빼기
    answer = SUM - numbers.reduce((acc, cur) => acc + cur, 0);

    return answer;
}