const nav = document.querySelector("#nav");

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-0.15591514, 51.51830379]
});

nav.onclick = (evt) => {
    
    const lng = Number(evt.target.dataset.lng);
    const lat = Number(evt.target.dataset.lat);
    
    const point = [lng, lat];
    
    map.flyTo({
        center: point,
        zoom: 18
    });
    
}

