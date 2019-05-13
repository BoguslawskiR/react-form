import React from 'react'
import find from 'lodash/find'

class FormField extends React.PureComponent {
  state = {
    touched: false,
    error: null
  }

  validateField = (event) => {
    const value = event.target.value
    const error = find(this.props.validators, (validator) => !validator.validator(value))
    if (error) {
      this.setState({ error: error.message })
    } else {
      this.setState({ error: null })
    }
  }

  render() {
    const { children, ...rest } = this.props
    const { error, touched } = this.state
    return <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          className: `${child.props.className ? child.props.className : ''} ${error && touched && 'input--error'}`,
          onBlur: (event) => {
            this.setState({ touched: true })
            child.props.onBlur && child.props.onBlur(event)
          },
          onChange: (event) => {
            this.validateField(event)
            child.props.onChange && child.props.onChange(event)
          }
        })
      })}
      {error && touched && <div className='error'>
        {error}
      </div>}
    </div>
  }
}

FormField.defaultProps = {
  validators: []
}

export default FormField