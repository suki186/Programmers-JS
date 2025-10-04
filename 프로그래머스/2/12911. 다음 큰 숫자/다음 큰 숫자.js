/* 시간 초과
function solution2(n) {
    var answer = 0;
    
    // 2진수 변환 후 1 개수 세기
    const num = [...n.toString(2)].filter(e => e === "1").length;
    
    answer = n+1; // 하나 큰수
    while(true) {
        const count = [...answer.toString(2)].filter(e => e === "1").length;
        
        if(count === num) break; // 1개수가 같다면 통과   
        answer++; // 다르면 하나 큰수
    }
    
    return answer;
}
*/

// 비트 연산으로 1의 개수 세는 함수
function countOnes(x) {
    let count = 0;
    
    while (x > 0) {
        if (x & 1) count++; // 맨 오른쪽 비트가 1이면 카운트
        x = x >> 1; // 오른쪽으로 한 비트씩 이동
    }
    
    return count;
}

function solution(n) {
    const count = countOnes(n); // 1의 개수
    let answer = n + 1; // 다음수
    
    // answer을 하나씩 키우면서 1의 개수 비교
    while (countOnes(answer) !== count) {
        answer++;
    }
    
    return answer;
}