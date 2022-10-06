
const q = document.querySelector("#q");

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';



const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gloer/ck5585k1h0n671cp2ognd6r4p',
    zoom: 3,
    center: [12.846122, 52.093683]
});

map.on("load", () => {
   
   map.addLayer({
      id: "europe",
      type: "fill",
      paint: {
          "fill-color" : "rgba(200, 200, 200, 0.3)"
      },
      source: {
          type: "geojson",
          data: "https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson"
      }
   });
    
});

const riktigeSvar = ["Norway", "Poland", "Belarus", "Germany"];
let i = 0;
let poeng = 0;

map.on("click", "europe", (e) => {
     const fasit = riktigeSvar[i];
     const svar = e.features[0].properties.NAME;
     
     if(svar === fasit) {         
         poeng++;
         console.log("Riktig svar. Du har nå " + poeng + " poeng!");
     } else {
         console.log("Feil svar");
     }
     
     i++;
     q.innerText = riktigeSvar[i];
});



