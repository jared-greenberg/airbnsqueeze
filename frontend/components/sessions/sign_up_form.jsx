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

  errors() {
    return this.props.errors.map((err, idx) => (
      <li key={idx}>{err}</li>
    ))
  }

  render() {

    return (
      <>
        <h3 className="form-title">{this.props.formType}</h3>
        <div className="form-wrapper">
        <form className="session-form" onSubmit={this.handleSubmit}>
            <ul>
              {this.errors()}
            </ul>
          <section className="grouped-inputs">
            <input type="text" value={this.props.first_name} 
              onChange={this.changeField("first_name")} placeholder="First name"/>
            <input type="text" value={this.props.last_name} 
              onChange={this.changeField("last_name")} placeholder="Last name"/>
          </section>

          <section className="lower-inputs">
            <input type="date" value={this.props.birthday} 
              onChange={this.changeField("birthday")} />
            <input type="text" value={this.props.email} 
              onChange={this.changeField("email")} placeholder="Email" />
            <input type={this.state.passwordType} value={this.props.password} 
              onChange={this.changeField("password")} placeholder="Password"/>
        
            <a id="password-show" onClick={this.togglePassword}>
              {this.state.passwordType === "password" ? "Show" : "Hide"}
            </a>
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