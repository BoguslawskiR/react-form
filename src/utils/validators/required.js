export const required = {
    validator: (value) => !!(value && value !== ''),
    message: 'This field is required'
}

