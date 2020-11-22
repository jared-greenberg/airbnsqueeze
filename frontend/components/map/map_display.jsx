import React from 'react';
import MarkerManager from './marker_manager';


const locations = {
  "Ithaca, NY": { lat: 42.440498, lng: -76.495697 },
  "Santa Cruz, CA": { lat: 36.974117, lng: -122.030792 },
  "Boulder, CO": { lat: 40.016869, lng: -105.279617 }
}


class MapDisplay extends React.Component {


  componentDidMount() {
    
    const mapOptions = {
      center: locations[this.props.location],
      zoom: this.props.zoom || 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.markerManager = new MarkerManager(this.map)
    this.markerManager.updateMarkers(this.props.listings);
    // this.marker = new google.maps.Marker({
    //   position: mapOptions.center,
    //   map: this.map
    // })
  }

  componentDidUpdate(){
    this.map.setCenter(locations[this.props.location]);
    this.markerManager.updateMarkers(this.props.listings)
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