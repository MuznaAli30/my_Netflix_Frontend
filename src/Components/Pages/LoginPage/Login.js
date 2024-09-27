import React, { useState } from 'react'
import Header from '../../Header/Header'
import hero from '../../../Assests/hero.webp'

export default function Login() {
  const[isLogin,setIsLogin] = useState(false);
  const[fullName,setFullName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");



  const LoginHandler=()=>{
    setIsLogin(!isLogin)
  };

  const getInputData=(e)=>{
    e.preventDefault();
    console.log(fullName,email,password);
    setFullName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className=''>
      <Header />
      <div >
        <img className=' w-[100vw] h-[100vh]' src={hero} alt='bg-img' />
      </div>
      <div
        className='absolute top-0 left-0  w-full h-full'
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
        }}
      ></div>
      
      <form onSubmit={getInputData} className='absolute bg-black p-12 top-11 flex my-36 left-0 right-0 flex-col w-3/12 items-center justify-center mx-auto rounded-3xl opacity-85'>
      <h1 className='text-white text-3xl mb-5 font-bold'>{isLogin ? "Login" : "Sign Up"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin &&
            <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Name' className='outline-none p-3 my-2 rounded-sm bg-gray-700 text-white'/>
          }
        
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-700 text-white'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type='Password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-700 text-white'/>
          <button className='bg-red-800 mt-8  rounded-xl p-3 text-white font-bold hover:bg-red-600'>{isLogin ? "Login" : "Sign Up"}</button>
          <p className='mt-2 text-white'>{isLogin ?  "New to Netflix?" : "Already have an account?"}<span onClick={LoginHandler}className='ml-2 text-blue-500 font-medium cursor-pointer hover:text-blue-400'>{isLogin?"Sign Up":"Login"}</span></p>
        </div>
      </form>
    </div>
  )
}
