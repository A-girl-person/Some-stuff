// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <=10; i++) {
//     let result = numbers.map(num => num * i);
//     console.log(result);    
// };

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.map(num => num * num);
// console.log(result);

// let people = [{name:"Alice", age: 25}, {name: "Bob", age: 35}, {name: "Charlie", age:28}];
// let found = people.find(people => people.age > 30);
// console.log(found);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = numbers.filter(num => num % 2 === 0)
// console.log(even);

// let fruits = ["apple", "banana", "cherry", "date"];
// let a = fruits.some(fruits => fruits > "a");
// console.log(a);

// let numbers = [1, 2, 3, 4, 5];
// let positive = numbers.every(num => num > 0);
// console.log(positive);

// let people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
//     { name: "Charlie", age: 40 },
//     { name: "Dave", age: 28 }
// ];
// let Uuganaa = people.filter(people => people.age >= 30);
// console.log(Uuganaa);   

// let students = [
//     { name: "Alice", age: 20, grades: [70, 80, 90] },
//     { name: "Bob", age: 22, grades: [60, 65, 70] },
//     { name: "Charlie", age: 23, grades: [80, 85, 90] },
//     { name: "Dave", age: 21, grades: [50, 60, 55] }
// ];
// function Average(grades) {
//     let sum = grades.   reduce((total, grade) => total + grade, 0);
//     return sum / grades.length;
// };
// students.forEach(student => {let average = Average(student.grades); if (average >= 75) {
//     console.log(student);
//     }
// });

// let products = [
//     { name: "Laptop", category: "electronics", price: 999 },
//     { name: "Headphones", category: "electronics", price: 49 },
//     { name: "Keyboard", category: "electronics", price: 29 },
//     { name: "Shoes", category: "clothing", price: 79 },  
//     { name: "T-shirt", category: "clothing", price: 19 }
// ];
// let cheap = products.filter(products => products.category === "electronics" && products.price < 100);
// console.log(cheap);  

let employees = [
    { name: "Alice", department: "engineering", skills: ["JavaScript", "Python", "C++"] },
    { name: "Bob", department: "marketing", skills: ["CEO", "Content Writing"] },
    { name: "Charlie", department: "engineering", skills: ["Java", "Python"] },
    { name: "Dave", department: "engineering", skills: ["JavaScript", "Ruby"] },
    { name: "Eve", department: "sales", skills: ["Negotiation", "Communication"] }
];
let pro = employees.filter(employees => employees.skill     );
console.log(pro);