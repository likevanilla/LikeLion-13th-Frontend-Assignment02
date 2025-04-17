function solution(num1, num2) {

    console.log("덧셈: " + add(num1, num2));
    console.log("뺄셈: " + sub(num1, num2));
    console.log("나눗셈: " + div(num1, num2));
    console.log("곱셈: " + mul(num1, num2));
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

solution(1, 2);