/*
    A 65, Z 90
    a 97, z 122
*/
function solution(s, n) {   
    const arr = Array.from(s); // 문자열 -> 배열
    
    const codes = arr.map(e => {
        if (e === " ") return " "; // 공백은 그대로
        
        let code = e.charCodeAt(0); // 문자 -> 아스키코드
        
        // 대문자, 소문자 순환
        return e >= "A" && e <= "Z" ? String.fromCharCode((code-65+n)%26+65) :
        String.fromCharCode((code-97+n)%26+97)
    });
    
    return codes.join("");
}

/*
// 대문자 순환
if (code >= 65 && code <= 90) {
    code = ((code - 65 + n) % 26) + 65;
}
// 소문자 순환
else if (code >= 97 && code <= 122) {
    code = ((code - 97 + n) % 26) + 97;
}
*/
