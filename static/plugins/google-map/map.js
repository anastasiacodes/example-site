const citymap = {
  chicago: {
    center: { lat: 38.41, lng: -82.44 },
    coverage: 2714856,
  }
};

function initMap() {
  const myLatLng = { lat: 38.41, lng: -82.44 };
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "cf52c1458b13d0fe",
    zoom: 6,
    center: myLatLng,
  });


  new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Huntington, WV",
    // icon: '/images/icons/marker.png'
  });


  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the distance.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#D4AF37",
      // strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#D4AF37",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].coverage) * 125,
    });
  }
}
