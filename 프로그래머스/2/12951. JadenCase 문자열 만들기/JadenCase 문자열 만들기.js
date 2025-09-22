/*
    ** -- 런타임 에러 주의
    공백이 연속으로 있는 경우 "for the  last week"
    -> ["for","the","","last","week"]
    -> 빈문자열인지 체크 필요(삼항연산자)
*/
function solution(s) {
    var answer = '';
    
    const arr = s.split(" ").map(e => 
        e ? e[0].toUpperCase() + e.slice(1).toLowerCase() : ""
    );
    answer = arr.join(" ");
 
    return answer;
}