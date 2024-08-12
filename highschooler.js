// class Person {
//     constructor(name, age, gender) {
//         this.name = "Guy";
//         this.age = 30;
//         this.gender = "unknown";
//     }
//     greet() {
//         console.log('Hello my name is', this.name);
//     }
// };

// class Student extends Person{
//     constructor(name, age, gender, studentId){
//         super(name, age, gender);
//         this.studentId = "hello";
//     }
//     study() {
//         console.log(this.name, 'is not studying');
//     }
// };

// const person = new Person();
// person.greet();
// const student = new Student();
// student.study();

class Item {
    constructor(name, price, quantity) {
        this.name = "DM";
        this.price = 9.99;
        this.quantity = 3;
    }
    getTotalPrice() {
        console.log('Total price is',this.price * this.quantity);
    }
};
const item = new Item();
item.getTotalPrice();

class Inventory {
    constructor(storeItems) {
        this.storeItems = [];
    }
    addItem(stuff) {
        this.storeItems.push(stuff);
    }
    removeItem(name) {
        this.storeItems = this.storeItems.filter(item => item.name !== name);
    }
    getInventoryvalue() {
        const dept = this.storeItems.map(item => item.value);
        console.log('Total value is', dept.reduce((a, b) => a + b, 0));
    }
    printInventory() {
        console.log(this.storeItems)
        document.getElementById('placeholder-1').innerHTML = this.storeItems[hah];
    }
};
const hah = this.storeItems.length
const stuff = {}
const inventory = new Inventory();
inventory.addItem({ name: "thermonuclear", value: 4});
inventory.addItem({ name: "banana", value: 8});
inventory.addItem({ name: "computer", value: 4});
inventory.addItem({name: "Upper Spine", value: 100});

inventory.removeItem('banana');

inventory.getInventoryvalue();

inventory.printInventory();
