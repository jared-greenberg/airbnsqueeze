import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStatetoProps = state => ({
  user: {
    first_name: "",
    last_name: "",
    birthday: "",
    email: "",
    password: ""
  },
  formType: "Sign Up",
  oppText: "Already have an account?",
  oppType: "Log In"

})

const mapDispatchtoProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  switchModal: () => dispatch(openModal("login")),
  action: user => dispatch(signUp(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);