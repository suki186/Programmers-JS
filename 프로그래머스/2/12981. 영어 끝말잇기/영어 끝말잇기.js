function solution(n, words) {
    const arr = new Set(); // 사용된 단어
    let cur, prev = '';
    
    arr.add(words[0]); // 첫 단어
    
    for (let i=1; i<words.length; i++) {
        cur = words[i]; // 현재 단어
        prev = words[i-1]; // 이전 단어

        // 이미 나왔거나 잘못된 단어가 아니라면 arr에 넣기
        if (arr.has(cur) || prev.slice(-1) !== cur.slice(0,1)) {
            return [i%n+1, Math.floor(i/n)+1]
        }
        else {
            arr.add(cur);
        }
    }

    // 문제가 없다면 [0,0]
    return [0, 0];
}