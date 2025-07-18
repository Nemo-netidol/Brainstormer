import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const handleGoToIdeaPage = () => {
    navigate('/idea');
  }

  return (
     <>
      <div className="flex h-dvh justify-center items-center">
        <div className="rounded-2xl bg-base-200 w-md flex flex-col p-10">
          <div className="justify-center flex">
            <p className='font-bold text-3xl my-10'>Login</p>
          </div>
          <p className='text-[12px]'>Username</p>
          <input type="text" placeholder='Username' className='my-2 input w-full mb-8' />
          <p className='text-[12px]'>Password</p>
          <input type="password" placeholder='Password' className='my-2 input w-full mb-8' />
          <button onClick={handleGoToIdeaPage} className='btn btn-primary mt-5 mb-3'>Login</button>
          <div className="flex flex-row justify-center">
            <p>Don't have an account? <Link to={"/signup"} className='font-bold' >Sign up now </Link>
            </p> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Login