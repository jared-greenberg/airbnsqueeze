import { connect } from 'react-redux';

const mapStateToProps = state => ({
  modal: state.ui.modal
})