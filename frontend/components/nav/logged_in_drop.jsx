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
        <li>Trips</li>
        <li onClick={this.signOutAction.bind(this)}>Log Out</li>
       </ul>
    )
  }
}

export default LoggedInDrop;