import authService from "../authService";

describe('Auth service', () => {
  test('shoulds login with error', async () => {
    expect(authService.login('radek@livechat.com', 'test1234', false)).rejects.toEqual(new Error('invalid email or password'))
  })

  test('shoulds login correctly', async () => {
    const resp = await authService.login('test@test.pl', 'Password1', false)
    expect(resp).toEqual({})
  })
})