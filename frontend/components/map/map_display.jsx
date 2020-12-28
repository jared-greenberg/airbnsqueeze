import React from 'react';
import MarkerManager from './marker_manager';

const cities = {
  "Ithaca, NY": { lat: 42.440498, lng: -76.495697 },
  "Santa Cruz, CA": { lat: 36.974117, lng: -122.030792 },
  "Boulder, CO": { lat: 40.016869, lng: -105.279617 }
}


class MapDisplay extends React.Component {

  mapOptions() {
    const options = { }
    if (this.props.coords){
      options.center = this.props.coords;
      options.zoom = 15;
    }
    else if (Object.keys(cities).includes(this.props.query.location)){
      options.center = cities[this.props.query.location];
      options.zoom = 13.5;
    }
    else {
      options.center = { lat: 40.227746, lng: - 97.250879 }
      options.zoom = 3.9;

    }
    return options;
  }

  markerClickHandler(id){
    this.props.history.push(`/listings/${id}`)
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, this.mapOptions());
    this.markerManager = new MarkerManager(this.map);
    this.markerManager.updateMarkers(this.props.listings, this.markerClickHandler.bind(this), this.props.type)
  }

  componentDidUpdate(prevProps){
      const {center, zoom} = this.mapOptions();
      this.map.panTo(center);
      this.map.setZoom(zoom);
      this.markerManager.updateMarkers(this.props.listings, this.markerClickHandler.bind(this), this.props.type)
    }
  

  render() {
      return (
          <div id={`${this.props.type}-map-wrapper`}>
            <div id="map-container" ref="map">
              Map
            </div>
          </div>
      )
    }
}

export default MapDisplay;