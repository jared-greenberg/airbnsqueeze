import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mapStatetoProps = state => ({
  user: {
    first_name: "",
    last_name: "",
    birthday: "",
    email: "",
    password: ""
  },
  formType: "Sign Up"

})

const mapDispatchtoProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  action: user => dispatch(signUp(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);