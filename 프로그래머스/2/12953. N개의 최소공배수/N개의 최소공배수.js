function gcd(a, b) { // 최대공약수
    return a % b ? gcd(b, a % b) : b;
}

function lcm(a, b) { // 최소공배수
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    var answer = 0;
    answer = arr.reduce((p, n) => lcm(p, n));

    return answer;
}