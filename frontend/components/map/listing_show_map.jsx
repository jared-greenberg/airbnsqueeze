import React from 'react';


class ListingShowMap extends React.Component {



  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.latitude, lng: this.props.longitude },
      zoom: 15
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      map: this.map
    })

  }

  render() {
      return (
        <div>
          <h2>Location</h2>
          <div id="map-container" ref="map">
            Map
        </div>
        </div>
      )
    }
}

export default ListingShowMap;