import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='focus::border-gray-500 rouded-sm w-full border border-gray-300 p-3 outline-none focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='.min-h-[1rem].text-sm mt-1 text-red-600'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='focus::border-gray-500 rouded-sm w-full border border-gray-300 p-3 outline-none focus:shadow-sm'
                  placeholder='password'
                />
                <div className='.min-h-[1rem].text-sm mt-1 text-red-600'></div>
              </div>
              <div className='mt-3'>
                <button className='lex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className='item-center mt-8 flex justify-center'>
                <span className='text-slate-400'>Bạn chưa có tài khoản ?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
