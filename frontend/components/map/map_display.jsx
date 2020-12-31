import React from 'react';
import MarkerManager from './marker_manager';

const cities = {
  "Ithaca, NY": { id: 'i', latitude: 42.440498, longitude: -76.495697},
  "Santa Cruz, CA": { id: 's', latitude: 36.974117, longitude: -122.030792},
  "Boulder, CO": { id: 'b', latitude: 40.016869, longitude: -105.279617}
}


class MapDisplay extends React.Component {

  constructor(props){
    super(props);
    this.drawCities = this.drawCities.bind(this);
    this.cityClickHandler = this.cityClickHandler.bind(this);
  }

  mapOptions() {
    const options = { }
    if (this.props.coords){
      options.center = this.props.coords;
      options.zoom = 15;
    }
    else if (Object.keys(cities).includes(this.props.query.location)){
      let {latitude, longitude} = cities[this.props.query.location]
      options.center = {lat: latitude, lng: longitude};
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

  cityClickHandler(city){
    let query = {...this.props.query};
    query.location = city;
    this.props.startQuery(query);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, this.mapOptions());
    this.markerManager = new MarkerManager(this.map);
    if (!this.drawCities()) {
      this.markerManager.updateMarkers(this.props.listings, this.markerClickHandler.bind(this), this.props.type)
    }
  }

  componentDidUpdate(prevProps){
      const {center, zoom} = this.mapOptions();
      this.map.panTo(center);
      this.map.setZoom(zoom);
      if (!this.drawCities()) {
        this.markerManager.updateMarkers(this.props.listings, this.markerClickHandler.bind(this), this.props.type)
      }
  }

  drawCities(){
    debugger
    if (this.props.type === "index" && (this.props.query.location === "" || !this.props.query.location)){
      this.markerManager.updateMarkers(Object.values(cities), this.cityClickHandler.bind(this), "city");
      return true
    }
    return false
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