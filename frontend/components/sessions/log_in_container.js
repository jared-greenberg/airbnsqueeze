import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LogInForm from './log_in_form';

const mapStatetoProps = state => ({
  user: {
    email: "",
    password: ""
  },
  demoUser: { 
    email: "demo@gmail.com",
    password: "abcd1234"
  } ,
  formType: "Log in",
  oppText: "Don't have an account?",
  oppType: "Sign up"

})

const mapDispatchtoProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  switchModal: () => dispatch(openModal("signup")),
  action: user => dispatch(logIn(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(LogInForm);