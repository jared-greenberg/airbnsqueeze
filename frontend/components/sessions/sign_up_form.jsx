import React from 'react';

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {...props.user, passwordType: "password"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.errors = this.errors.bind(this);
    this.validInput = this.validInput.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();

    const user = {...this.state};
    delete user["passwordType"];

    this.props.action(user).then(
      () => this.props.closeModal()
    );
  }

  changeField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  togglePassword(){
    const toggle = this.state.passwordType === "password" ? "text" : "password"
    this.setState({passwordType: toggle})
  }

  errors(type) {
    const {errors} = this.props;
    if (!errors[type]) return null;
    return ( 
      <div className={`${type}-error error-msg`}>
        <i className="fas fa-exclamation-circle fa-sm"></i> <span>{errors[type]}</span>
      </div>
    )
  }

  validInput(field) {
    if (field === "birthday" && this.state["birthday"] === "") {
      return "nobday"
    }
    return this.state[field] !== "" ? "valid" : ""
  }

  render() {
    return (
      <>
        <h3 className="form-title">{this.props.formType}</h3>
        <div className="form-wrapper">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <section className="grouped-inputs">
            <div className="first-name-input">
              <input id="sign-up-first" type="text" value={this.props.first_name} 
                onChange={this.changeField("first_name")} placeholder="First name"/>
                <label className={`${this.validInput("first_name")} sign-up-label`} htmlFor="sign-up-first">First name</label>
            </div>
            <div className="last-name-input rel-input">
              <input id="sign-up-last" type="text" value={this.props.last_name} 
                onChange={this.changeField("last_name")} placeholder="Last name"/>
                <label className={`${this.validInput("last_name")} sign-up-label`} htmlFor="sign-up-last">Last name</label>
            </div>
              {this.errors("first_name")}
              {this.errors("last_name")}
          </section>
            {this.props.errors["first_name"] || this.props.errors["last_name"] ? null :
            <p className="disclaimer">Make sure it matches the name on your government ID</p>}

          <section className="lower-inputs">
            <div className="birthday-input rel-input">
              <input id="sign-up-bday" type="date" value={this.props.birthday} 
                onChange={this.changeField("birthday")} />
                <label className={`${this.validInput("birthday")} bday sign-up-label`} htmlFor="sign-up-bday">Birthdate</label>
              {this.errors("birthday")}
              {this.errors("base")}
            </div>
            <div className="email-input rel-input">
              <input id="sign-up-email" type="text" value={this.props.email} 
                onChange={this.changeField("email")} placeholder="Email" />
                <label className={`${this.validInput("email")} email sign-up-label`} htmlFor="sign-up-email">Email</label>
              {this.errors("email")}
            </div>
            <div className="password-input rel-input">
              <input id="sign-up-password" type={this.state.passwordType} value={this.props.password} 
                onChange={this.changeField("password")} placeholder="Password"/>
                <label className={`${this.validInput("password")} pword sign-up-label`} htmlFor="sign-up-password">Password</label>
              {this.errors("password")}
            <a id="password-show" onClick={this.togglePassword}>
              {this.state.passwordType === "password" ? "Show" : "Hide"}
            </a>
            </div>
          
          </section>

          
          <input type="submit" value={this.props.formType}/>
          
          <p className="opposite-modal-option">{this.props.oppText}  
            <a onClick={this.props.switchModal}>{this.props.oppType}</a>
          </p>

        </form>
      </div>
    </>
    )
  }
   
   
}

export default SignUpForm;