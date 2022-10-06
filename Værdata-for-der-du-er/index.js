const url = "https://api.openweathermap.org/data/2.5/weather?appid=f4b38696b19fb1462d4ed1cf3e4e2365";

async function getWeather(lat, lon) {
    // Vi må vente på at denne blir ferdig
    
    const api = `${url}&lat=${lat}&lon=${lon}`;
    
    const response = await fetch(api);  
    const json = await response.json();
    
    console.log(json);  
}

function findPosition(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    
    getWeather(lat, lon);
}

navigator.geolocation.getCurrentPosition(findPosition);

