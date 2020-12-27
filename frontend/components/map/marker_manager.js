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

  createMarker(listing, markerClickHandler){
    const coords = {lat: listing.latitude, lng: listing.longitude}
    const label = {
      url: window.marker,
      scaledSize: new google.maps.Size(50, 30)
    }
    if (!coords.lat || !coords.lng) { return }
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      icon: label,
      label: {
        text: `$${listing.price}`,
        color: 'white',
        fontSize: "12px",
        fontWeight: 'bold',
      }
    })
    this.markers[listing.id] = marker;
    marker.addListener("click", () => {
      markerClickHandler(listing.id)
    })
  }

}

export default MarkerManager;