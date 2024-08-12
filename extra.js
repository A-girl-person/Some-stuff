// for(let i = 0; i <= 100; i++) {
//     console.log(i);
// };

// const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };

// for (let i = 1; i <= 100; i ++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin"];
// const children = array1.concat(array2, array3);
// console.log(children);

// const array2 = ["Emil", "Tobias", "Linus"];
// console.log(array2.length);

// let pain = 0;
// for(let i = 0; i <= 100; i++) {
//     pain = pain + i
// };
// console.log(pain);

// const countries = [
//     "San Marino",
//     "Seychelles",
//     "Singapore",
//     "Solomon Islands",
//     "Suriname",
//     "Tajikistan",
//     "Timor-Leste",
//     "Tonga",
//     "Tunisia",
//     "Turkmenistan",
//     "Tuvalu",
//     "Uganda",
//     "Uzbekistan",
//     "Vanuatu",
//     "Vatican City",
//     "Yemen",
//     "Zambia",
//     "Mongolia",
//     "Namibia",
//     "Nauru",
//     "Nepal",
//     "Niger",
//     "Nigeria",
//     "North Macedonia",
//     "Papua New Guinea",
//     "Qatar",
//     "Rwanda",
//     "Saint Kitts and Nevis",
//     "Saint Lucia",
//     "Saint Vincent and the Grenadines",
//     "Azerbaijan",
//     "Botswana",
//     "Brunei",
//     "Burkina Faso",
//     "Central African Republic",
//     "Comoros",
//     "Djibouti",
//     "Eswatini",
//     "Gabon",
//     "Gambia",
//     "Grenada",
//     "Kyrgyzstan",
//     "Laos",
//     "Liechtenstein",
//     "Luxembourg",
//     "Madagascar",
//     "Malawi",
//     "Maldives",
//     "Mauritania",
//     "Mauritius"
// ];
// console.log(countries.sort());

// const countries = [    "Azerbaijan",
//     "Botswana",
//     "Brunei",
//     "Burkina Faso",
//     "Central African Republic",
//     "Comoros",
//     "Djibouti",
//     "Eswatini",
//     "Gabon",
//     "Gambia",
//     "Grenada",
//     "Kyrgyzstan",
//     "Laos",
//     "Liechtenstein",
//     "Luxembourg",
//     "Madagascar",
//     "Malawi",
//     "Maldives",
//     "Mauritania",
//     "Mauritius",
//     "Mongolia",
//     "Namibia",
//     "Nauru",
//     "Nepal",
//     "Niger",
//     "Nigeria",
//     "North Macedonia",
//     "Papua New Guinea",
//     "Qatar",
//     "Rwanda",
//     "Saint Kitts and Nevis",
//     "Saint Lucia",
//     "Saint Vincent and the Grenadines",
//     "San Marino",
//     "Seychelles",
//     "Singapore",
//     "Solomon Islands",
//     "Suriname",
//     "Tajikistan",
//     "Timor-Leste",
//     "Tonga",
//     "Tunisia",
//     "Turkmenistan",
//     "Tuvalu",
//     "Uganda",
//     "Uzbekistan",
//     "Vanuatu",
//     "Vatican City",
//     "Yemen",
//     "Zambia"
// ];
// function reverse(countries) {
//     return countries.slice().reverse();
// }
// const reversed = reverse(countries);
// console.log(reversed);

// const countries = ["Azerbaijan","Botswana","Brunei","Burkina Faso","Central African Republic","Comoros","Djibouti","Eswatini","Gabon","Gambia","Grenada","Kyrgyzstan","Laos","Liechtenstein","Luxembourg","Madagascar","Malawi","Maldives","Mauritania","Mauritius","Mongolia","Namibia","Nauru","Nepal","Niger","Nigeria","North Macedonia","Papua New Guinea","Qatar","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","San Marino","Seychelles","Singapore","Solomon Islands","Suriname","Tajikistan","Timor-Leste","Tonga","Tunisia","Turkmenistan","Tuvalu","Uganda","Uzbekistan","Vanuatu","Vatican City","Yemen","Zambia"];

// const suffering = countries.filter(country => country[0] === "A");
// console.log(suffering);

// const countries = ["Azerbaijan","Botswana","Brunei","Burkina Faso","Central African Republic","Comoros","Djibouti","Eswatini","Gabon","Gambia","Grenada","Kyrgyzstan","Laos","Liechtenstein","Luxembourg","Madagascar","Malawi","Maldives","Mauritania","Mauritius","Mongolia","Namibia","Nauru","Nepal","Niger","Nigeria","North Macedonia","Papua New Guinea","Qatar","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","San Marino","Seychelles","Singapore","Solomon Islands","Suriname","Tajikistan","Timor-Leste","Tonga","Tunisia","Turkmenistan","Tuvalu","Uganda","Uzbekistan","Vanuatu","Vatican City","Yemen","Zambia"];
// const  excruciatingAgony= countries.includes(country => country[county.length] === "o");
// console.log(excruciatingAgony);

// const countries = ["Azerbaijan","Botswana","Brunei","Burkina Faso","Central African Republic","Comoros","Djibouti","Eswatini","Gabon","Gambia","Grenada","Kyrgyzstan","Laos","Liechtenstein","Luxembourg","Madagascar","Malawi","Maldives","Mauritania","Mauritius","Mongolia","Namibia","Nauru","Nepal","Niger","Nigeria","North Macedonia","Papua New Guinea","Qatar","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","San Marino","Seychelles","Singapore","Solomon Islands","Suriname","Tajikistan","Timor-Leste","Tonga","Tunisia","Turkmenistan","Tuvalu","Uganda","Uzbekistan","Vanuatu","Vatican City","Yemen","Zambia"];
// const wahdbhsubfhasbdasbdu = countries.map(country => country.slice(1).toLowerCase() + country[country.length -  1].toUpperCase());
// console.log(wahdbhsubfhasbdasbdu);

// const fruits = [Horned = { id:"horn", name: "no", color: "yellow"}, 
//     Rambutan = { id: "rambutan", name: "nein", color: "red"}, 
//     Dragon = { id: "dragon", name: "dragon", color: "red"},
//     Durian = { id: "dur", name: "nein", color: "red"}, 
//     Jackfruit = { id: "jack", name: "nein", color: "red"}, 
//     Pawpaw = { id: "raw", name: "nein", color: "red"},
//     Soursop = { id: "sour", name: "nein", color: "red"},
//     Custard = { id: "ap", name: "nein", color: "red"},
//     Salak = { id: "salak", name: "nein", color: "red"},
//     Chayote = { id: "cha", name: "nein", color: "red"}];
// const radar = fruits.filter(fruit => fruit.color === "yellow");
// console.log(radar);
// const radar = fruits.find(fruit => fruit.name === "dragon");
// console.log(radar);

const fruits = [{ id:1, name: "mango", color: "yellow"}, { id:2, name: "dragon", color: "yellow"}];

console.log(fruits.map(fruit => fruit.name))

const more = [banana = {
    id: ban, name: an, color: black}];
    const much = fruits.concat(more);
    console.log(much);