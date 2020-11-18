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
  }


  toggleMenu(e) {
    e.stopPropagation();
    this.setState({menu: !this.state.menu}, () => {
      if (this.state.menu) {
        document.addEventListener("click", this.toggleMenu)
      }
      else {
        document.removeEventListener("click", this.toggleMenu)
      }
    })
  }

  dropDown(){
    if (!this.state.menu) { return null }
    else if (this.props.currentUser) { return <LoggedInDrop logOut={this.props.logOut}/>}
    else { return <LoggedOutDrop openModal={this.props.openModal} />}
  }


  render() {
    return (
      <nav>
        <section className="nav-drop-down" onClick={this.toggleMenu}>
          <button onClick={this.toggleMenu}><i className="fas fa-bars"></i></button>
          {this.dropDown()}
        </section>
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


