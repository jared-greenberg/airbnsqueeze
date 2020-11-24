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
    this.upcomingRef = React.createRef();
    this.pastRef = React.createRef();
  }

  componentDidMount(){
    this.props.fetchBookings(this.props.match.params.userId);
    this.upcomingRef.current.classList.add("selected-choice");
  }

  pastList(){
    
    if (this.props.pastBookings.length === 0) {return this.nothing("previous")}
    
    
    return this.props.pastBookings.map(booking => {
      const listing = this.props.listings[booking.listingId]
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
      const listing = this.props.listings[booking.listingId]
      return <BookingIndexItem key={booking.id} booking={booking} listing={listing} upcoming={this.state.upcoming} />
    })
  }

  switchMode(e){
    if (e.currentTarget.classList.contains('selected-choice')) {return}
    this.setState({upcoming: !this.state.upcoming}, () => {
      if (this.state.upcoming) {
        this.upcomingRef.current.classList.add('selected-choice')
        this.pastRef.current.classList.remove('selected-choice')
      }
      else {
        this.upcomingRef.current.classList.remove('selected-choice')
        this.pastRef.current.classList.add('selected-choice')
      }
    })
  }

  render(){



    return (
      <main id="booking-index">
        <h1>Trips</h1>
        <nav className="bookings-menu">
          <h3 className="upcoming-choice" ref={this.upcomingRef} onClick={this.switchMode}>Upcoming</h3>
          <h3 className="past-choice" ref={this.pastRef} onClick={this.switchMode}>Past</h3>
        </nav>

        <section className="bookings-display">
          <ul id="bookings-list">
            {this.state.upcoming ? this.upcomingList() : this.pastList()}
          </ul>
        </section>

      </main>



    )
    
  }
}

export default BookingIndex;