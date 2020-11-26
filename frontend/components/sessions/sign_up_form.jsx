import React from 'react';

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {...props.user, passwordType: "password"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.errors = this.errors.bind(this);
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

  render() {
    return (
      <>
        <h3 className="form-title">{this.props.formType}</h3>
        <div className="form-wrapper">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <section className="grouped-inputs">
            <div className="first-name-input">
              <input type="text" value={this.props.first_name} 
                onChange={this.changeField("first_name")} placeholder="First name"/>
            </div>
            <div className="last-name-input rel-input">
              <input type="text" value={this.props.last_name} 
                onChange={this.changeField("last_name")} placeholder="Last name"/>
            </div>
              {this.errors("first_name")}
              {this.errors("last_name")}
          </section>
            {this.props.errors["first_name"] || this.props.errors["last_name"] ? null :
            <p className="disclaimer">Make sure it matches the name on your government ID</p>}

          <section className="lower-inputs">
            <div className="birthday-input rel-input">
              <input type="date" value={this.props.birthday} 
                onChange={this.changeField("birthday")} />
              {this.errors("birthday")}
              {this.errors("base")}
            </div>
            <div className="email-input rel-input">
              <input type="text" value={this.props.email} 
                onChange={this.changeField("email")} placeholder="Email" />
              {this.errors("email")}
            </div>
            <div className="password-input rel-input">
              <input type={this.state.passwordType} value={this.props.password} 
                onChange={this.changeField("password")} placeholder="Password"/>
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