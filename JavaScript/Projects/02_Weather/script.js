document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temp = document.getElementById("temperature");
    const desc = document.getElementById("description");
    const errorMsg = document.getElementById("error-message");

    const API_KEY = "031fa9fa3bb6e27dbad9f4804a5e3922";

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;
        
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError(error.message);
        }
    });
    
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found. Please try again.");
        }
        const data = await response.json();
        return data;
    }
    
    function displayWeatherData(weatherData) {
        const { name, main, weather } = weatherData;
        cityName.textContent = name;
        temp.textContent = `Temparature : ${main.temp}°C`;
        desc.textContent = `Weather : ${weather[0].description}`;
        
        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");
    }
    function showError(message) {
        errorMsg.textContent = message || "An error occurred.";
        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden")
    }
});
