import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  comfirm_password: string
}
export default function Register() {
  const {
    register,
    watch,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

  const formValues = watch()
  console.log(formValues)
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='focus::border-gray-500 rouded-sm w-full border border-gray-300 p-3 outline-none focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='.min-h-[1.25rem].text-sm mt-1 text-red-600'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='focus::border-gray-500 rouded-sm w-full border border-gray-300 p-3 outline-none focus:shadow-sm'
                  placeholder='password'
                  autoComplete='on'
                  {...register('password', rules.password)}
                />
                <div className='.min-h-[1.25rem].text-sm mt-1 text-red-600'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='focus::border-gray-500 rouded-sm w-full border border-gray-300 p-3 outline-none focus:shadow-sm'
                  placeholder='Comfirm Password'
                  autoComplete='on'
                  {...register('comfirm_password', {
                    ...rules.comfirm_password
                  })}
                />
                <div className='.min-h-[1.25rem].text-sm mt-1 text-red-600'>{errors.comfirm_password?.message}</div>
              </div>
              <div className='mt-3'>
                <button className='lex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>

              <div className='item-center mt-8 flex justify-center'>
                <span className='text-slate-400'>Bạn đã có tài khoản ?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
