import React from 'react'
import './LoginForm.scss'
import FormField from '../FormField/FormField';
import { minLength, password, required, email } from '../../utils/validators'

export const handleInputChange = (formValues, setFormValues, event) => {
  const value = event.target.value
  const name = event.target.name
  setFormValues({ ...formValues, [name]: value })
}

const LoginForm = ({ handleSubmit, authError }) => {
  const [formValues, setFormValues] = React.useState({})

  return <form onSubmit={e => handleSubmit(e, formValues)}>
    <fieldset className='form'>
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <FormField validators={[required, email]}>
        <input type="text" name="email" id="email" onChange={handleInputChange.bind(this, formValues, setFormValues)}/>
      </FormField>
      <label htmlFor="password">Password</label>
      <FormField validators={[required, minLength(6), password]}>
        <input type="password" name="password" id="password" onChange={handleInputChange.bind(this, formValues, setFormValues)} />
      </FormField>
      <div className='container--remember'>
        <label htmlFor="remember">Remember me</label>
        <input onChange={handleInputChange.bind(this, formValues, setFormValues)} type="checkbox" name="remember" id="remember" />
      </div>
      <div className="error">
        {authError}
      </div>
      <input type="submit" value="Login" />
    </fieldset>
  </form>
}

export default LoginForm