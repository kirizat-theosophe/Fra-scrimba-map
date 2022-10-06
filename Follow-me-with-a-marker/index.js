
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ';
  
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-73.946630, 40.811441]
  });
  
  let marker;
  
  const followMe = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    
    map.jumpTo({
      center: [lng, lat],
      zoom: 18
    });
    
    marker.setLngLat([lng, lat]);
    
  }
  
  map.on("load", () => {
    navigator.geolocation.watchPosition(followMe);
    
    marker = new mapboxgl.Marker();
    marker.setLngLat([-73.946630, 40.811441]);
    marker.addTo(map);
  })

