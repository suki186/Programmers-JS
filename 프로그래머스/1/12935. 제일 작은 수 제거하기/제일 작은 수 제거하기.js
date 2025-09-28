function solution(arr) {

    let min = Math.min(...arr); // 최솟값
    arr = arr.filter((e) => e !== min); // 최솟값 아닌 애들만

    return arr.length > 0 ? arr : [-1];
}