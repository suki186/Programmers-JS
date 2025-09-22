function solution(absolutes, signs) {
    var answer = 0;
    
    for (var i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }
    
    // reduce()로 한줄 코드
    // answer = absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
    
    return answer;
}