
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';

const map = new mapboxgl.Map({
  container: 'kartet',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 16,
  center: [12.492285, 41.890466]
});


map.on("load", () => {
  
  const div = document.createElement("a");
  div.href = "https://mcdonalds.no";
  div.target = "_blank";
  div.className = "marker";
  
  const mcMarker = new mapboxgl.Marker(div);
  mcMarker.setLngLat([12.492285, 41.890466]);
  mcMarker.addTo(map);
  
});



