let person = {
    name : "김멋사",
    age : 13,
    pet : "토끼",
};

person.gender = "남자";
person.name = "박멋사";
delete person.age;

console.log(person);