import datas from "./data.js";

class Items {
    constructor(image, name, category, price, id) {
        this.image = image;
        this.name = name;
        this.category = category;
        this.price = price;
        this.id = id;
    }
    render() {
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("food-pls");
        profileDiv.innerHTML = `
        <img src="${this.image}" id="border" height="200px" width="200px"/>
        <button id="cart-add"><img id="cart-icon" src="../img/icon-add-to-cart.svg">  Add to cart</button>
        <p id="category">${this.category}</p>
        <p class="name">${this.name}</p>
        <p id="price">$${this.price}</p>
        `;

        document.appendChild(profileDiv);
        document.getElementById("cart-add").addEventListener("click", () => {
            document.getElementById("cart-add").innerHTML = `<button>stuff</button>`;
        });

        return profileDiv;
    }
    cart() {
        const profileDiv2 = document.createElement("div");
        profileDiv2.classList.add("free-food");
        profileDiv2.innerHTML = `
        <div>
            <h2 id="cart-count">Your Cart ()</h2>
            <p>Order total</p> <p>$</p>
            <button id="carbon"><img id="broc" src="./assets/images/icon-carbon-neutral.svg">This is a <mark> carbon-neutral </mark> delivery</button>
            <button id="confirm">Confrirm Order</button>
        </div>
        `;
        return profileDiv2;
    }
}

console.log(datas)
const contactInfo = document.getElementById("food-pls");
contactInfo.innerHTML = "";
datas.forEach((userData) => {
    const items = new Items(
        userData.image.desktop,
        userData.name,
        userData.category,
        userData.price
    );
    contactInfo.appendChild(items.render());
});

document.getElementById("cart-add").addEventListener("click", () => {
    const orderInfo = document.getElementById("free-food");
    orderInfo.innerHTML = "";
    const items = new Items(
        '', '', '', ''
    );
    orderInfo.appendChild(items.cart());
    console.log('fu')
});