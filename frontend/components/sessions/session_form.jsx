import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {...props.user, ["passwordType"]: "password"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUpExtras = this.signUpExtras.bind(this);
    this.demoButton = this.demoButton.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(
      () => this.props.closeModal()
    );
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {
      email: "demo@gmail.com",
      password: "abcd1234"
    }
    this.props.action(demoUser).then(
      this.props.closeModal()
    );
  }

  changeField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  signUpExtras(){
    if (this.props.formType === 'Log in') { return null }
    return (
      <>
        <div className="input-wrapper">
          <input
            type="text"
            id="first-name"
            value={this.state.first_name}
            onChange={this.changeField("first_name")}
            placeholder="First name"
          />
          <label htmlFor="first-name">First name</label>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            id="last-name"
            value={this.state.last_name}
            onChange={this.changeField("last_name")}
            placeholder="Last name"
          />
          <label htmlFor="last-name">Last name</label>
        </div>
        <div className="input-wrapper">
          <input
            type="date"
            id="birthday"
            value={this.state.birthday}
            onChange={this.changeField("birthday")}
          />
          {/* <label htmlFor="birthday">Birthdate</label> */}
        </div>
      </>
    ) 
  }

  demoButton(){
    if (this.props.formType === 'Sign up') { return null }
    return (
      <button id="demo-button" onClick={this.handleDemo}>Demo Login</button>
    )
  }

  togglePassword(){
    const toggle = this.state.passwordType === "password" ? "text" : "password"
    this.setState({passwordType: toggle})
  }

  render() {
   
    return (
        <>
          <section className="session-title">
              <h2>{this.props.formType}</h2>
          </section>
          <section className="form-wrapper">
            <form className="session-form" onSubmit={this.handleSubmit}>
              {this.signUpExtras()}
              <div className="input-wrapper">
                <input 
                  type="text"
                  id="email"
                  value={this.state.email}
                  onChange={this.changeField("email")}
                  placeholder="Email"
                  />
                  <label htmlFor="email">Email</label>
              </div>
              <div className="input-wrapper">
                <input
                  type={this.state.passwordType}
                  id="password"
                  value={this.state.password}
                  onChange={this.changeField("password")}
                  placeholder="Password"
                  />
                  <label htmlor="password">Password</label>
                  <a id="password-show" href="#" onClick={this.togglePassword}>Show</a>
              </div>
              <input type="submit" value={this.props.formType}/>
              {this.demoButton()}
              <p id="opposite">{this.props.oppText}
              <a href="#" onClick={this.props.switchModal}>{this.props.oppType}</a>
               </p>
            </form>
          </section>
        </>
    )
  }
}

export default SessionForm;