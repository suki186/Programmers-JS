function solution(array, commands) {
    let answer = [];
    
    for (const [i, j, k] of commands) {
        // i~j 자르기
        const arr = array.slice(i-1, j);

        // 배열 정렬
        arr.sort((a, b) => a - b);

        // k번쨰 숫자
        answer.push(arr[k-1]);
    }
    
    return answer;
}