
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';

const url = "https://api.openweathermap.org/data/2.5/weather?appid=f4b38696b19fb1462d4ed1cf3e4e2365";

const map = new mapboxgl.Map({
  container: 'kartet',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 16,
  center: [12.492285, 41.890466]
});


async function showPosition(lat, lon) {
  
  const api = `${url}&lon=${lon}&lat=${lat}`;
  const response = await fetch(api);
  const json = await response.json();
  
  console.log(json);
  
  const div = document.createElement("a");
  div.href = "https://mcdonalds.no";
  div.target = "_blank";  
  div.innerHTML = `<img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" />`
  
  const mcMarker = new mapboxgl.Marker(div);
  mcMarker.setLngLat([lon, lat]);
  mcMarker.addTo(map);
  map.jumpTo({
    center: [lon, lat]
  });
  
}

function findPosition(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  
  showPosition(lat, lon);
  
}

map.on("load", () => {
  
  navigator.geolocation.getCurrentPosition(findPosition);
  
});



