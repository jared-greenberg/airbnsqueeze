class MarkerManager {
  
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    
    listings.forEach(listing => {
      if (!this.markers[listing.id]){
        this.createMarker(listing);
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

  createMarker(listing){
    const coords = {lat: listing.latitude, lng: listing.longitude}
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map
    })
    this.markers[listing.id] = marker;
  }

}

export default MarkerManager;