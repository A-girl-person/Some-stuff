class User {
  constructor(name, email, picture) {
    this.name = name;
    this.email = email;
    this.picture = picture;
  }

  render() {
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("user-profile");

    profileDiv.innerHTML = `
            <img src="${this.picture}" alt="${this.name}" />
            <div>
                <h3>${this.name}</h3>
                <p>${this.email}</p>
            </div>
        `;

    return profileDiv;
  }
}

document.getElementById("load-users").addEventListener("click", () => {
    
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
      const profilesContainer = document.getElementById("user-profiles");
      profilesContainer.innerHTML = ""; // Clear previous profiles

      data.results.forEach((userData) => {
        const user = new User(
          `${userData.name.first} ${userData.name.last}`,
          userData.email,
          userData.picture.thumbnail
        );

        profilesContainer.appendChild(user.render());
      });
    })
    .catch((error) => console.error("Error fetching user data:", error));
});