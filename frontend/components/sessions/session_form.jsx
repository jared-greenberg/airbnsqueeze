import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUpExtras = this.signUpExtras.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  changeField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  signUpExtras(){
    if (this.props.formType === 'Log In') { return null }
    return (
      <>
      <label htmlFor="first-name">First name</label>
        <input type="text" value={this.state.first_name} onChange={this.changeField("first_name")}/>
      <label htmlFor="last-name">Last name</label>
        <input type="text" value={this.state.last_name} onChange={this.changeField("last_name")}/>
      <label htmlFor="birthday">Birthdate</label>
        <input type="date" value={this.state.birthday} onChange={this.changeField("birthday")}/>
      </>
    ) 
  }

  render() {
   
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.props.formType}</h3>
        {this.signUpExtras()}
        <label htmlFor="email">Email</label>
        <input 
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.changeField("email")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.changeField("password")}
        />
        <input type="submit" value={this.props.formType}/>
      </form>
    )
  }
}

export default SessionForm;