function solution(n) {
    let starPyramid = '';

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - i; j++) {
            starPyramid += ' ';
        }

        for(let k = 0; k < 2 * i + 1; k++) {
            starPyramid += '*';
        }
        
        starPyramid += '\n';
    }

    console.log(starPyramid);
}

solution(3);
solution(5);