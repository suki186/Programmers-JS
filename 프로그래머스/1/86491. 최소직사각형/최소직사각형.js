function solution(sizes) {
    let x = 0, y = 0;
    let maxX = 0, maxY = 0; // 최종 가로, 세로
    
    for ([w, h] of sizes) {
        // 둘 중 더 큰 수를 가로로
        x = Math.max(w, h); // 70
        y = Math.min(w, h); // 30
        
        maxX = Math.max(maxX, x); // 지금까지 가장 큰 가로
        maxY = Math.max(maxY, y); // 지금까지 가장 큰 세로
    }
    return maxX * maxY;
}