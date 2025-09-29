function solution(s) {
    var answer = true;
    
    if (s.includes("e")) answer = false;
    else if (!isNaN(s) && (s.length == 4 || s.length == 6)) answer = true
    else answer = false;
    
    return answer;
}