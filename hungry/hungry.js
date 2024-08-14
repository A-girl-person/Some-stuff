import datas from "./data.js";

class Items {
    constructor(image, name, category, price) {
        this.image = image;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    render() {
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("food-pls");
        profileDiv.innerHTML =`
        <img src="${this.image}"/>
        <p id="name">${this.name}</p>
        <p id="category">${this.category}</p>
        <p id="price">$${this.price}</p>
        `;
        return profileDiv;
    }
    cart() {

    }
}
        console.log(datas)
        const contactInfo = document.getElementById("food-pls");
        contactInfo.innerHTML = "";

        datas.forEach((userData) => {
            const items = new Items(
                userData.image.thumbnail,
                userData.name,
                userData.category,
                userData.price
    );
            contactInfo.appendChild(items.render());
});

