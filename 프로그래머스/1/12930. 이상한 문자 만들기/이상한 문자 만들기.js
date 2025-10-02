function solution(s) {
    var answer = '';
    
    // 공백 기준 분리
    const arr = s.split(" ");

    // 반복문 -> 짝수 대문자, 홀수 소문자
    arr.forEach((e, idx) => {
        for (let i = 0; i < e.length; i++) {
            answer += i % 2 === 0 ? e[i].toUpperCase() : e[i].toLowerCase();
        }
        if (idx < arr.length - 1) answer += " "; // 공백 추가
    })
    
    return answer;
}

// map 2번 버전
function solution2(s) {
    let answer = '';
    
    answer = s.split(" ")
        .map((word) => 
             [...word].map((e, i) => 
                i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()
            ).join("")
        ).join(" ")
    
    return answer;
}