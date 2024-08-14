class Contact {
    constructor(id, name, email, username, phone) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
    }
    filter() {
        const profileDiv2 = document.createElement("div");
        profileDiv2.classList.add("find");
        profileDiv2.innerHTML =`
                <div>
                    <p id="id">ID:${this.id}</p>
                        <div>
                            <h3 id="name" class="flex">${this.name}</h3>
                        </div>
                    <div><p id="email">email: ${this.email}</p></div>
                    <p id="user">username: ${this.username}</p>
                    <p id="gender">phone: ${this.phone}</p>
                </div>
        `;
        return profileDiv2;
    };
    render() {
        const profileDiv = document.createElement("tr");
        profileDiv.classList.add("user-profile");
        profileDiv.innerHTML =`
                    <td id="id">ID:${this.id}</td>
                        <div>
                            <h3 id="name" class="flex">${this.name}</h3>
                        </div>
                    <td id="email">email: ${this.email}</td>
                    <td id="user">username: ${this.username}</td>
                    <td id="gender">phone: ${this.phone}</td>
        `;
        return profileDiv;
    }
}
// end of Contact class
class ContactManager {
        constructor() {
            this.contacts = [];
        }
        async fetchContacts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            this.contacts = data.map(
                (user) => new Concat(user.id, user.name, user.email, user.phone)
            );
            this.displayConcacts();
        }
        async addContact(name, email, phone) {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": :"application/json",
                },
                body: JSON.stringify({name, email, phone}),
            });




        }
}

    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
        console.log( data)
        const contactInfo = document.getElementById("contact-info")
        contactInfo.innerHTML = "";
        const hm = data.length;
        const contact = new Contact(
            data[0].id,
            data[0].name,
            data[0].username,
            data[0].email,  
            data[0].phone
        );
    contactInfo.appendChild(contact.contacts());
});

document.getElementById("search-name").addEventListener("click", () => {
    const find = document.getElementById('name-input').value;
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const contactInfo = document.getElementById("find")
        contactInfo.innerHTML = "";
        const finder = data.filter(dat => dat.name === find)
        console.log(finder);
            const contact = new Contact(
                finder[0].id,
                finder[0].name,
                finder[0].username,
                finder[0].email,
                finder[0].phone
            );
        contactInfo.appendChild(contact.render());
    });
});

document.getElementById("add").addEventListener("submit", () => {
    const name = document.getElementById('namer').value;
    const email = document.getElementById('mailer').value;
    const username = document.getElementById('usernamer').value;
    const phone = document.getElementById('phoner').value;
    const id = document.getElementById("id's").value;
    const merge = [name, email, username, phone, id];
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const contactInfo = document.getElementById("find")
        contactInfo.innerHTML = "";
        let why = data.concat(merge);
        console.log(data);
    });
});