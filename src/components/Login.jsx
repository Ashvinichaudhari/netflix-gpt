import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const email =useRef(null);
  const password = useRef(null);  

  const handleButtonClick = ()=> {
    //validate the form data
    // checkValidData(email , password)

    console.log(email.current.value);
    console.log(password.current.value);

  const message = checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);

  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Background_img"
      />

      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white z-10 rounded-lg bg-opacity-75" >
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 w-full bg-gray-800"
        />}

        <input
          ref={email}
          type="text"
          placeholder="Email-Address"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?SignUp Now" : "Alredy register Sign in Now!"}</p>
      </form>
    </div>
  )
}

export default Login
