import React from 'react';
import { Redirect } from 'react-router-dom';

class LoggedInDrop extends React.Component{
  signOutAction(e){
    this.props.logOut().then(
      () => <Redirect to="/" />
    )
  }

  render(){

    return (
      <ul>
        <li>
          <a href="#">Trips</a>
        </li>
        <li>
          <a href="#" onClick={this.signOutAction.bind(this)}>Log Out</a>
        </li>
      </ul>
    )
  }
}

export default LoggedInDrop;