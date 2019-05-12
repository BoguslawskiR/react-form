import React from 'react'
import find from 'lodash/find'

class FormField extends React.PureComponent {
  state = {
    pristine: true,
    error: null
  }

  validateField = (event) => {
    const value = event.target.value
    const error = find(this.props.validators, (validator) => !validator.validator(value))
    if (error) {
      this.setState({ error: error.message })
    }
  }

  render() {
    const { children, ...rest } = this.props
    const { error, pristine } = this.state
    return <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          onBlur: (event) => {
            this.setState({ pristine: false })
            child.onBlur && child.onBlur()
          },
          onChange: (event) => {
            this.validateField(event)
            child.onChange && child.onChange(event)
          }
        })
      })}
      {error && !pristine && <div className='field--error'>
        {error}
      </div>}
    </div>
  }
}

FormField.defaultProps = {
  validators: []
}

export default FormField