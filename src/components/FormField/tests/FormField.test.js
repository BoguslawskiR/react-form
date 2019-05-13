import React from 'react'
import { shallow, mount } from 'enzyme'
import FormField from "../FormField"
import { required, minLength } from '../../../utils/validators'

describe('Form Field', () => {
    test('should catch field error', () => { 
        const wrapper = shallow(<FormField  validators={[required, minLength(6)]}>
            <input name='test'/>
        </FormField>)
        wrapper.instance().validateField({ target: { value: 'test' }})
        expect(wrapper.instance().state.error).toBe("Password should contains at least 6 characters")
    })

    test('should validate field', () => { 
        const wrapper = shallow(<FormField  validators={[required, minLength(6)]}>
            <input name='test'/>
        </FormField>).setState({ error: "Password should contains at least 6 characters"})
        wrapper.instance().validateField({ target: { value: 'testWr2' }})
        expect(wrapper.instance().state.error).toBe(null)
    })
})