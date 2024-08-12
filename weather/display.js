class Wheather {
    constructor(city, description, tempature, icon, speed) {
        this.city = city;
        this.description = description;
        this.tempature = tempature;
        this.icon = icon;
        this.speed = speed;
    }
    render() {
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("user-profile");
        profileDiv.innerHTML =`
                <div>
                    <h2 id="city">So you live in: ${this.city}<br>i got your home now</h2>
                        <div>
                            <h3 id="desc" class="flex"><img class="flex" src="http://openweathermap.org/img/wn/${this.icon}.png" alt="${this.description}" />${this.description}</h3>
                        </div>
                    <p id="temp">temp: ${this.tempature}</p>
                    <p id="con">icon: ${this.icon}</p>
                    <p id="wind">wind speed: ${this.speed}</p>
                </div>
        `;

    return profileDiv;
    }
}

document.getElementById("get-weather").addEventListener("click", () => {
    const city = document.getElementById('city-input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`)
    .then((response) => response.json())
    .then((data) => {
        console.log('ddd', data)
        const weatherInfo = document.getElementById("weather-info")
        weatherInfo.innerHTML = "";

        const wheather = new Wheather(
            data.name,
            data.weather[0].description,
            data.main.temp,
            data.weather[0].icon,
            data.wind.speed
        );
        
        weatherInfo.appendChild(wheather.render());

    })
    .catch((error) => console.error("Error fetching wheather data:", error));
});