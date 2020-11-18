import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.user, ["passwordType"]: "password" };
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

  changeField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  signUpExtras() {
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

  demoButton() {
    if (this.props.formType === 'Sign up') { return null }
    return (
      <button id="demo-button" onClick={this.handleDemo}>Demo Login</button>
    )
  }

  togglePassword() {
    const toggle = this.state.passwordType === "password" ? "text" : "password"
    this.setState({ passwordType: toggle })
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
            <input type="submit" value={this.props.formType} />
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


#modal - background {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z - index: 2;
}

 #modal - contents {
  position: absolute;
  top: 50 %;
  left: 50 %;
  transform: translate(-50 %, -50 %);
  background: #fefefe;
  border - radius: 20px;
  width: 550px;
  height: 475px;
  overflow: hidden
}

  #modal - x {
  position: absolute;
  top: 25px;
  left: 25px;
}

 .session - form {
  padding: 25px;
  display: flex;
  flex - direction: column;
  align - items: center;
}

 .session - title{
  text - align: center;
  border - bottom: #f0f0f0 1px solid;
  position: relative;
  height: 15 %;
  display: flex;
  justify - content: center;
  align - items: center;;
}

 .session - title > h2 {
  font - weight: 600;
}


 .form - wrapper {
  overflow - y: scroll;
  height: 80 %;
}

 .input - wrapper {
  width: 100 %;
  position: relative;
}

 .input - wrapper > label {
  position: absolute;
  top: 25px;
  left: 10px;
  transition - duration: 250ms;
  background: #fefefe;
}

 .session - form input{
  font - size: 16px;
  height: 55px;
  padding: 8px 4px;
  border: 1px solid #d7d7d7;
  border - radius: 8px;
  width: 100 %;
  padding - left: 10px;
}

/* .session-form input:focus + label {
  transform: translate(0px, -22px);
  font-size: 12px;
} */

.session - form input: valid + label{
  display: none;
}


 .session - form input[type = 'submit'], button {
  background: #044241;
  color: white;
}

 #password - show {
  position: absolute;
  text - decoration: underline;
  right: 0;
  top: 25 %;
}

 #opposite {
  align - self: flex - start;
}

  #opposite > a {
  padding - left: 8px;
  text - decoration: underline;
  font - weight: 400;
}

  #demo - button {

}

