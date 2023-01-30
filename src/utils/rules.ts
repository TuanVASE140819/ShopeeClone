import { RegisterOptions } from 'react-hook-form'

type Rule = { [key in 'email' | 'password' | 'comfirm_password']?: RegisterOptions }

export const rules: Rule = {
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email is invalid'
    },
    maxLength: {
      value: 150,
      message: 'Email is too long'
    },
    minLength: {
      value: 5,
      message: 'Email is too short'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 150,
      message: 'Email is too long'
    },
    minLength: {
      value: 6,
      message: 'Email is too short'
    }
  },
  comfirm_password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 150,
      message: 'Email is too long'
    },
    minLength: {
      value: 6,
      message: 'Email is too short'
    }
  }
}
