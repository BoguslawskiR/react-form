export const password = {
    validator: (value) => /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/.test(value),
    message: 'Password should contains at least 1 upper case character, 1 lower case character and 1 number character'
  }
  