import { handleInputChange } from "../LoginForm";

describe('Login Form', () => {
  test('should handle input change', () => {
    const setFormValue = jest.fn()
    handleInputChange({ email: 'radek@livechat.com', password: 'R2mwr2', remember: false }, setFormValue, { target: { value: 'R2mwr2R', name: 'password' } })
    expect(setFormValue).toBeCalledWith({ email: 'radek@livechat.com', password: 'R2mwr2R', remember: false })
  })
})