/* 3중 for문 */
function solution(arr) {
    var answer = 0;
    const l = arr.length;
    
    // 3개씩 뽑기
    for(let i=0; i<l-2; i++) {
        for(let j=i+1; j<l-1; j++) {
            for(let k=j+1; k<l; k++) {
                // 합 구하기 -> 0이면 answer++
                if(!(arr[i]+arr[j]+arr[k])) answer++;
            }
        }
    }

    return answer;
}