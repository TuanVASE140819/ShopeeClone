import { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'comfirm_password']?: RegisterOptions }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 150,
      message: 'Email từ 5 đến 150 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Email từ 5 đến 150 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 150,
      message: 'Password từ 6 đến 150 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password từ 6 đến 150 ký tự'
    }
  },
  comfirm_password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 150,
      message: 'Password từ 6 đến 150 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Password từ 6 đến 150 ký tự'
    },
    validate:
      typeof getValues === 'function' ? (value) => value === getValues('password') || 'Password không khớp' : undefined
  }
})
