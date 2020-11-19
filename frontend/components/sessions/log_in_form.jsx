import React from 'react';


class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.user, passwordType: "password" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.errors = this.errors.bind(this);
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

  errors(){
    return this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ))
  }

  render() {
    return (
      <>
        <h3 className="form-title">{this.props.formType}</h3>
        <form className="session-form" onSubmit={this.handleSubmit}>
        <ul>
          {this.errors()}
        </ul>
        <section className="grouped-inputs">
          <input type="text" value={this.props.email} 
            onChange={this.changeField("email")} placeholder="Email" />
          <input type={this.state.passwordType} value={this.props.password} 
            onChange={this.changeField("password")} placeholder="Password"/>
          <a id="password-show" href="#" onClick={this.togglePassword}>
              {this.state.passwordType === "password" ? "Show" : "Hide"}
          </a>
        </section>


        <input type="submit" value={this.props.formType} />
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