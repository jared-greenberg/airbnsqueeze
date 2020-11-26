import React from 'react';
import {connect} from 'react-redux';
import {deleteBooking} from '../../actions/booking_actions';

class CancelBooking extends React.Component {
  
  constructor(props){
    super(props);
    this.bookingId = window.bookingId;
    delete window["bookingId"]
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteBooking(this.bookingId)
    this.props.closeModal();
  }
  
  render() {
    return ( 
      <div className="try-to-cancel" ref={this.cancelRef}>
        <h3>Are you sure?</h3>
        <button onClick={this.props.closeModal}>No</button>
        <button onClick={this.handleDelete}>Yes</button>
      </div>
    )
  }
}




const mapDispatchToProps = dispatch => ({
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId))
})

export default connect(null, mapDispatchToProps)(CancelBooking)