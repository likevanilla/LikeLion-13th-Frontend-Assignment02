function solution() {
    let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"];

    color.push("Babyblue");
    color.push("Pink");

    console.log(color.splice(3, 1, "Lightgreen"));

    console.log(color);
    console.log(color.length);
}

solution();