import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStatetoProps = state => ({
  user: {
    email: "",
    password: ""
  },
  formType: "Log in",
  oppText: "Don't have an account?",
  oppType: "Sign up"

})

const mapDispatchtoProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  switchModal: () => dispatch(openModal("signup")),
  action: user => dispatch(logIn(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);