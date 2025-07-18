import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const signup = () => {
  const navigate = useNavigate();
  const handleGoToIdeaPage = () => {
    navigate('/idea');
  }
  
  return (
     <>
      <div className="flex h-dvh justify-center items-center">
        <div className="rounded-2xl bg-base-200 w-md flex flex-col p-10">
          <div className="justify-center flex">
            <p className='font-bold text-3xl my-10'>Create Your Account</p>
          </div>
          <p className='text-[12px]'>Username</p>
          <input type="text" placeholder='Username' className='my-2 input w-full mb-8' />
          <p className='text-[12px]'>Password</p>
          <input type="password" placeholder='Password' className='my-2 input w-full mb-8' />
          <p className='text-[12px]'>Confirm Password</p>
          <input type="password" placeholder='Password' className='my-2 input w-full mb-8' />
          <button className='btn btn-primary mt-10 mb-3' onClick={handleGoToIdeaPage}>Create an account</button>
          <div className="flex flex-row justify-center">
          </div>
        </div>
      </div>
    </>
  )
}

export default signup