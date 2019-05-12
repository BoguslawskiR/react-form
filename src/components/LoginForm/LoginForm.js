import React from 'react'
import './LoginForm.scss'
import FormField from '../FormField/FormField';

const required = {
    validator: (value) => value && value !== '',
    message: 'This field is required'
}

const LoginForm = () => {
  return <form onSubmit={(e) => { console.log(e) }}>
    <fieldset className='form'>
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <FormField validators={[required]}>
        <input type="text" name="email" id="email" />
      </FormField>
      <label htmlFor="password">Password</label>
      <FormField>
        <input type="password" name="password" id="password" />
      </FormField>
      <div className='container--remember'>
        <label htmlFor="remember">Remember me</label>
        <input type="checkbox" name="remember" id="remember" />
      </div>
      <input type="submit" value="Login" />
    </fieldset>
  </form>
}

export default LoginForm