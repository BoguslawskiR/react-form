export const minLength = (minLength) => {
    return {
      validator: (value) => value && value.length >= minLength,
      message: 'Password should contains at least 6 characters'
    }
  }
  