/*
    배열에서 가장 큰수 -1해주는 것 까진 생각했는데 시간초과 났다.
    정렬 다시 할때 다시 sort 쓰는 것보다
    마지막 수만 버블정렬 하는게 더 빠름
*/
function solution(n, works) {
    var answer = 0;
    works.sort((a, b) => a - b); // 오름차순 정렬(큰수 맨뒤)
    
    let last = works.length - 1; // 제일 큰수
    
    for (let i=0; i<n; i++) {
        // 모든 값이 0이면 중단
        if (works[last] === 0) return 0;
        
        works[last]--; // 배열에서 가장 큰 수 찾아서 -1
        
        // 정렬 다시
        let idx = last;
        while(idx > 0 && works[idx] < works[idx-1]){
            [works[idx], works[idx-1]] = [works[idx-1], works[idx]]; // 버블정렬
            idx--;
        }
    }
    
    // 피로도 계산
    for (let i=0; i<works.length; i++) {
        answer += works[i]**2;
    }
    
    return answer;
}