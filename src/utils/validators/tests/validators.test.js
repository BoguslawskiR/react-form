import { email, minLength, password, required } from "..";

describe('Validators tests', () => {
  test('should validate email', () => {
    expect(email.validator('test@test.com')).toBe(true)
    expect(email.validator('taest.test.com')).toBe(false)
  })
  test('should validate minimal length', () => {
    expect(minLength(6).validator('rw25fk')).toBe(true)
    expect(minLength(6).validator('two')).toBe(false)
  })
  test('should validate password', () => {
    expect(password.validator('rW5dma')).toBe(true)
    expect(password.validator('rwrr25')).toBe(false)
    expect(password.validator('254115')).toBe(false)
    expect(password.validator('RAWD204')).toBe(false)
  })
  test('should validate required', () => {
    expect(required.validator('')).toBe(false)
    expect(required.validator(null)).toBe(false)
    expect(required.validator(undefined)).toBe(false)
    expect(required.validator('rw')).toBe(true)
  })
})