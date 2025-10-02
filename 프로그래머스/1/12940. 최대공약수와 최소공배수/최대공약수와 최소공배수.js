// 최대공약수
function gcd(a, b) {
    return a % b ? gcd(b, a % b) :  b;
}

// 최소공배수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    const answer = [gcd(n, m), lcm(n, m)];
    
    return answer;
}