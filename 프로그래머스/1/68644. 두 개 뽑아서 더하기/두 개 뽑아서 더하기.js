function solution(numbers) {
    var answer = [];
    const sums = new Set();
    
    numbers.forEach((e, idx) => {
        for(let i=idx+1; i<numbers.length; i++) {
            sums.add(e + numbers[i]);
        }
        
    })
    answer = [...sums].sort((a, b) => a - b); // 오름차순
    
    return answer;
}