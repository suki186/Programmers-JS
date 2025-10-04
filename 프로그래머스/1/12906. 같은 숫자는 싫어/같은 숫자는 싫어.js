function solution(arr)
{
    var answer = [arr[0]]; // 스택
    
    for(let i = 1; i < arr.length; i++) {
        // 들어있는 수와 같지 않다면 push
        if (answer[answer.length-1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}