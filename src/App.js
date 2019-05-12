import React from 'react';
import './App.scss';
import AuthService from './api/authService'
import LoginForm from './components/LoginForm/LoginForm';
import LoginSuccess from './components/LoginSuccess/LoginSuccess';
import LoginFailure from './components/LoginFailure/LoginFailure';

const handleLogin = async (email, password, rememberMe, setLoginState, setAuthError) => {
  setAuthError(null)
  try {
    await AuthService.login(email, password, rememberMe)
    setLoginState(false)
  } catch (e) {
    console.error(e)
    setAuthError(e)
  }
}

function App() {
  const [loginState, setLoginState] = React.useState(true)
  const [authError, setAuthError] = React.useState(null)
  return (
    <div className="container">
      {loginState && <LoginForm />}
      {!loginState && <LoginSuccess />}
      {authError && <LoginFailure />} 
    </div>
  );
}

export default App;
