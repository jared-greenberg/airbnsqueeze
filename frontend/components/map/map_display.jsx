import React from 'react';
import MarkerManager from './marker_manager';


class MapDisplay extends React.Component {


  componentDidMount() {
    debugger
    const mapOptions = {
      center: this.props.center,
      zoom: 11
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
    this.map.setCenter(this.props.center);
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