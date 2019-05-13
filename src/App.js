import React from 'react';
import './App.scss';
import AuthService from './api/authService'
import LoginForm from './components/LoginForm/LoginForm';
import LoginSuccess from './components/LoginSuccess/LoginSuccess';

class App extends React.Component {
  state = {
    loginState: true,
    authError: null
  }

  handleLogin = async (event, { email, password, remember }) => {
    event.preventDefault()
    this.setState({ authError: null })
    try {
      await AuthService.login(email, password, remember)
      this.setState({ loginState: false })
    } catch (e) {
      console.error(e)
      this.setState({ authError: String(e) })
    }
    
  }

  render () {
    const { loginState, authError } = this.state
    return (
      <div className="container">
        {loginState && <LoginForm handleSubmit={this.handleLogin} authError={authError} />}
        {!loginState && <LoginSuccess />}
      </div>
    );
  }
}

export default App;
