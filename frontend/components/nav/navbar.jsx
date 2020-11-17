import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logOut } from '../../actions/session_actions';


class NavBar extends React.Component {

  render() {

    return (
      <nav>
        <button onClick={() => this.props.openModal("login")}>Log In</button>
        <button onClick={() => this.props.openModal("signup")}> SignUp </button>
        { this.props.currentUser ? (
          <button onClick={()=> this.props.logOut()}>Log Out</button>
        ) : null }
      </nav>
    )
  }
    
}

const mapStateToProps = state => ({
  currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
  openModal: (modalType) => dispatch(openModal(modalType)),
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)


