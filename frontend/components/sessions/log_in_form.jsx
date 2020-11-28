import React from 'react';


class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.user, passwordType: "password" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.errors = this.errors.bind(this);
    this.validInput = this.validInput.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    
    
    const user = e.currentTarget.id === "demo-button" ? (this.props.demoUser) : {...this.state} 
    delete user["passwordType"];

    this.props.action(user).then(
      () => this.props.closeModal()
    );
  }

  changeField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  togglePassword() {
    const toggle = this.state.passwordType === "password" ? "text" : "password"
    this.setState({ passwordType: toggle })
  }

  errors(type) {
    const { errors } = this.props;
    if (!errors[type]) return null;
    return (
      <div className={`${type}-error error-msg`}>
        <i className="fas fa-exclamation-circle fa-sm"></i> <span>{errors[type]}</span>
      </div>
    )
  }

  validInput(field){
    return this.state[field] !== "" ? "valid" : ""
  }

  render() {
    return (
      <>
        <h3 className="form-title">{this.props.formType}</h3>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <section className="log-in-group grouped-inputs">
            <div className="log-in-email">
            <input id="log-in-input" type="text" value={this.props.email} 
              onChange={this.changeField("email")} placeholder="Email" />
            <label className={`${this.validInput("email")} log-in-label`} htmlFor="log-in-input">Email</label>
            </div>
            <div type="password-input">
            <input id="log-in-password-input" type={this.state.passwordType} value={this.props.password} 
              onChange={this.changeField("password")} placeholder="Password"/>
              <label className={`${this.validInput("password")} log-in-label`} htmlFor="log-in-password-input">Password</label>
            </div>
            <a id="password-show" onClick={this.togglePassword}>
                {this.state.passwordType === "password" ? "Show" : "Hide"}
            </a>
            {this.errors("log_in")}
          </section>


          <input id="login-button" type="submit" value={this.props.formType} />
          <button id="demo-button" onClick={this.handleSubmit}>Demo Login</button>

            <p className="opposite-modal-option">{this.props.oppText}
            <a onClick={this.props.switchModal}>{this.props.oppType}</a>
          </p>
  
      </form>
      </>
    )
  }


}

export default LogInForm;