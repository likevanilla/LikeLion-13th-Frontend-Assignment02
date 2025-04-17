function solution(n) {
    let score;

    //switch 버전
    switch (parseInt(n/10)) {
        case 10:
            score = "A+";
            break;
        
        case 9:
            score = "A";
            break;

        case 8:
            score = "B";
            break;
        
        case 7:
            score = "C";
            break;

        case 6:
            score = "D";
            break;
        
        default:
            score="F";
            break;

    }

    // if 버전
    // if (n == 100) score = "A+"
    // else if (n >= 90) score = "A"
    // else if (n >= 80) score = "B"
    // else if (n >= 70) score = "C"
    // else if (n >= 60) score = "D"
    // else score = "F"


    console.log(score);
}

solution(13); // F
solution(24); // F
solution(48); // F
solution(62); // D
solution(73); // C
solution(33); // F
solution(83); // B
solution(93);  // A
solution(70);  // C
solution(80);  // B
solution(90);  // A
solution(100); // A+