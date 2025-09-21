/*
    "10" -> ["1","0"] -> [1,0] -> 1
*/
function solution(x) {
    const sum = String(x).split("").reduce((acc, cur) => acc + Number(cur), 0);

    return x % sum === 0;
}