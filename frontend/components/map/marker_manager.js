class MarkerManager {
  
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings, markerClickHandler, type) {
    
    listings.forEach(listing => {
      if (!this.markers[listing.id]){
        this.createMarker(listing, markerClickHandler, type);
      }
    })

    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    Object.keys(this.markers).forEach(key => {
      if (listingsObj[key] === undefined) {
        this.removeMarker(key)
      }
    })

  }

  removeMarker(markerId) {
    this.markers[markerId].setMap(null);
    delete this.markers[markerId]
  }

  createMarker(listing, markerClickHandler, type){
    const coords = {lat: listing.latitude, lng: listing.longitude}
    const label = {
      url: window.marker,
      scaledSize: new google.maps.Size(50, 30)
    }
    const label2 = {
      url: window.marker,
      scaledSize: new google.maps.Size(70, 50)
    }
   
    if (!coords.lat || !coords.lng) { return }

    if (type === "show") {
      const circ = new google.maps.Circle({
        strokeColor: "#044241",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: "#044241",
        fillOpacity: 0.35,
        map: this.map,
        center: coords,
        radius: 700,
      })
      this.markers[listing.id] = circ;
      return;
    }

    const markerBase = {
      icon: label,
      zIndex: 0,
      label: {
        text: `$${listing.price}`,
        color: 'white',
        fontSize: "12px",
        fontWeight: 'bold',
      }
    }

    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
    })

    marker.setOptions(markerBase)

    this.markers[listing.id] = marker;
    marker.addListener("click", () => {
      markerClickHandler(listing.id)
    })

    google.maps.event.addListener(marker, "mouseover", () => {
      marker.setOptions({
        icon: label2, 
        zIndex: 1,
        label: {text: `$${listing.price}`,
          color: 'white',
          fontSize: "16px",
          fontWeight: 'bold'}});
    })

     google.maps.event.addListener(marker, "mouseout", () => {
      marker.setOptions(markerBase)
    })
    
  }
}

export default MarkerManager;