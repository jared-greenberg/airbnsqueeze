import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStatetoProps = state => ({
  user: {
    email: "",
    password: ""
  },
  formType: "Log In"

})

const mapDispatchtoProps = dispatch => ({
  action: user => dispatch(logIn(user))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(SessionForm);