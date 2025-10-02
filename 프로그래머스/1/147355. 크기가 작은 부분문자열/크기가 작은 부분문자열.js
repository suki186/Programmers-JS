function solution(t, p) {
    let answer = 0;
    const length = p.length; // p 길이

    for (let i = 0; i <= t.length - length; i++) {
        const num = t.slice(i, i+length) // p 길이만큼 t 자르기
        if (num <= p) answer++; // 작거나 같다면 카운트
    }
    
    return answer;
}