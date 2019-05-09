import React from 'react';
import './App.scss';
import AuthService from './api/authService'

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
      {loginState && <form onSubmit={(e) => { console.log(e) }}>
        <fieldset className='form'>
          <h3>Sign In</h3>
          <label for="email">Email</label>
          <input type="text" name="email" id="email" />
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
          <div className='container--remember'>
            <label for="remember">Remember me</label>
            <input type="checkbox" name="remember" id="remember" />
          </div>
          <input type="submit" value="Login" />
        </fieldset>
      </form>}
      {!loginState && <span>
        Login Successful
      </span>}
      {authError && <span>
        Invalid email or password
      </span>} 
    </div>
  );
}

export default App;
