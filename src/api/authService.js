class AuthService {
  login (email, password, rememberMe) {
    return new Promise((resolve, reject) => {
      if (email === 'test@test.pl' && password === 'Password1') {
        resolve({})
      } else {
        reject(new Error('invalid email or password'))
      }
    })
  }
}

export default new AuthService()