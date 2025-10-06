function solution(d, budget) {
    let answer = 0; // 개수
    let sum = 0; // 예산 합계
    
    d.sort((a ,b) => a - b); // 오름차순 정렬
    
    for(const e of d) {
        if (sum + e > budget) break;
        sum += e;
        answer++;
    }
    
    return answer;
}