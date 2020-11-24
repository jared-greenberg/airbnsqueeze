import {Link} from 'react-router-dom';
import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = { upcoming: true }
    this.switchMode = this.switchMode.bind(this);
    this.upcomingList = this.upcomingList.bind(this);
    this.pastList = this.pastList.bind(this);
  }

  componentDidMount(){
    this.props.fetchBookings(this.props.match.params.userId)
  }

  pastList(){
    
    if (this.props.pastBookings.length === 0) {return this.nothing("previous")}
    
    
    return this.props.pastBookings.map(booking => {
      const listing = listings[booking.listing_id]
      return <BookingIndexItem key={booking.id} booking={booking} listing={listing} upcoming={this.state.upcoming} />
    })
  }

  nothing (type) {
    return (
      <div className="empty-bookings">
        <h2>{`You have no ${type} listings at this time.`}</h2>
        <img src={window.nothingImg} />
      </div>
    )
  }

  upcomingList() {
    if (this.props.upcomingBookings.length === 0) { return this.nothing("upcoming") }
    return this.props.upcomingBookings.map(booking => {
      const val = this.props;
      debugger
      const listing = this.props.listings[booking.listing_id]
      return <BookingIndexItem key={booking.id} booking={booking} listing={listing} upcoming={this.state.upcoming} />
    })
  }

  switchMode(){
    this.setState({upcoming: !this.state.upcoming})
  }

  render(){



    return (
      <main id="booking-index">
        <h1>Trips</h1>
        <nav className="bookings-menu">
          <h2 id="upcoming-choice" onClick={this.switchMode}>Upcoming</h2>
          <h2 id="past-choice" onClick={this.switchMode}>Past</h2>
        </nav>

        <section className="bookings-display">
          <ul>
            {this.state.upcoming ? this.upcomingList() : this.pastList()}
          </ul>
        </section>

      </main>



    )
    
  }
}

export default BookingIndex;