class MarkerManager {
  
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings, markerClickHandler) {
    
    listings.forEach(listing => {
      if (!this.markers[listing.id]){
        this.createMarker(listing, markerClickHandler);
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
    if (!coords.lat || !coords.lng) { return }
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map
    })
    this.markers[listing.id] = marker;
    debugger
    marker.addListener("click", () => {
      markerClickHandler(listing.id)
    })
  }

}

export default MarkerManager;