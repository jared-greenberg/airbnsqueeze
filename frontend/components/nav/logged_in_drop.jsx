import React from 'react';
import { Link } from 'react-router-dom';

class LoggedInDrop extends React.Component{
  signOutAction(e){
    this.props.logOut().then(<Redirect to="/" />)
  }

  render(){
    const userId = this.props.currentUser;
    return (
      <ul className="drop-menu">
        <li>
          <Link to={`/users/${userId}/bookings`}>Trips</Link>
        </li>
        <li>
          <a onClick={this.signOutAction.bind(this)}>Log Out</a>
        </li>
      </ul>
    )
  }
}

export default LoggedInDrop;

