const ikon = document.querySelector("#ikon");

const api = "https://api.openweathermap.org/data/2.5/weather?q=Oslo,no&appid=f4b38696b19fb1462d4ed1cf3e4e2365";

async function getWeather() {
    // Vi må vente på at denne blir ferdig
    const response = await fetch(api);  
    const json = await response.json();
    
    console.log(json);
    
    const imgURL = `./icons/${json.weather[0].icon}.png`;  
    ikon.src = imgURL;
}

getWeather();

