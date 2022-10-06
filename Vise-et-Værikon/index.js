const ikon = document.querySelector("#ikon");

const api = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f4b38696b19fb1462d4ed1cf3e4e2365";

async function getWeather() {
    // Vi må vente på at denne blir ferdig
    const response = await fetch(api);  
    const json = await response.json();
    
    console.log(json);
    
    const imgURL = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;  
    ikon.src = imgURL;
}

getWeather();

