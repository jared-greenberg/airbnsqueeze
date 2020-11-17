import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mapStatetoProps = state => ({
  user: {
    email: "",
    password: ""
  },
  formType: "Log In"

})

const mapDispatchtoProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  action: user => dispatch(logIn(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);