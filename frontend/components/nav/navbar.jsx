import React from 'react';
import LoggedInDrop from './logged_in_drop';
import LoggedOutDrop from './logged_out_drop';
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import {logOut} from '../../actions/session_actions';


class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {menu: false}
    this.toggleMenu = this.toggleMenu.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({menu: !this.state.menu})
  }

  dropDown(){
    if (!this.state.menu) { return null }
    else if (this.props.currentUser) { return <LoggedInDrop toggleMenu={this.toggleMenu} logOut={this.props.logOut}/>}
    else { return <LoggedOutDrop toggleMenu={this.toggleMenu} openModal={this.props.openModal} />}
  }


  render() {
    return (
      <nav>
        <button onClick={this.toggleMenu}>Menu</button>
        {this.dropDown()}
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


