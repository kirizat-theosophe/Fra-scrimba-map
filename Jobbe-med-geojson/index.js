const nav = document.querySelector("#nav");

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 3,
    center: [-112.972103, 36.161252]
});

map.on("load", () => {
   
   map.addLayer({
      id: "mexico",
      type: "fill",
      paint: {
          "fill-color" : "rgba(200, 200, 200, 1)"
      },
      source: {
          type: "geojson",
          data: "data/mexico.geojson"
      }
   });
    
});

map.on("click", "mexico", () => {
    console.log("Vil du færa til Mexico");
});



