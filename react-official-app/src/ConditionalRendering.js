import React,{Component} from 'react';

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', inputText: '', view:'login'};
    
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleInput(e) {
    this.setState({ inputText: e.target.value });
  }
  
  handleLogin() {
    this.setState({text: this.state.inputText, view: 'login'});
  }

  handleLogout() {
    this.setState({view: 'logout'});
  }
  
  renderInputField() {
    if(this.state.view === 'login') {
      return <div></div>;
    } else {
      return (
          <p>
            <input
              onChange={this.handleInput}
              value={this.state.inputText}
            />
          </p>
      );
    }
  }
  
  renderButton() {
    if(this.state.view === 'login') {
      return (
          <button className="btn btn-warning"onClick={this.handleLogout}>
            Logout
          </button>
      );
    } else {
      return (
          <button className="btn btn-primary" onClick={this.handleLogin}>
            Login
          </button>
      );
    }
  }
  
  render () {
    return (
      <div>
        <p>Username: {this.state.text}</p>
        {this.renderInputField()}
        {this.renderButton()}
      </div>
    );
  }
}
