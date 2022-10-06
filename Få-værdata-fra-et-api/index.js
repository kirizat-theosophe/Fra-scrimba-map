const api = "https://api.openweathermap.org/data/2.5/weather?q=Bergen,no&appid=f4b38696b19fb1462d4ed1cf3e4e2365";

async function getWeather() {
    // Vi må vente på at denne blir ferdig
    const response = await fetch(api);  
    const json = await response.json();
    
    console.log(json);  
}

getWeather();

