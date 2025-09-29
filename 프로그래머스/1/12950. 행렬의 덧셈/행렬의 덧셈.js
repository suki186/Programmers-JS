function solution(arr1, arr2) {
    var answer = [[]];
    
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = []; // 빈배열
        for (let j = 0; j < arr1[i].length; j++) {
            // 요소의 개수만큼 -> arr1[i]
            answer[i].push(arr1[i][j] + arr2[i][j]);
        }
    }
    
    return answer;
}