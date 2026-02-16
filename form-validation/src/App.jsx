// Email validation
// Password strength
// Submit disabled until valid

import React from 'react'
import { useState ,useEffect} from 'react'

const App = () => {

  const[pass,setPass]=useState('')
  const[email,setEmail]=useState('')

  const[passError , setPassError] = useState('')
  const[emailError , setEmailError] = useState('')
  const[isValid , setIsValid] = useState(false)

  const validEmail = (email)=>{
    return  email.toLowerCase().endsWith("@gmail.com")
  };
  const validPass=(pass)=>{
    return pass.length>=8
  }

  useEffect(  ()=>{
    if(!validEmail(email)){
      setEmailError("email error")
     
    }
    else{setEmailError("")}

    if(!validPass(pass)){
      setPassError('pass error')
     
    }
    else(setPassError(''))


    if(validEmail(email) && validPass(pass)){
      setIsValid(true)
    }
    else(setIsValid(false))

  },[email,pass]);

  const SubmitHandle=(e)=>{
    e.preventDefault()
  }

     return (
    <div>
      <form onSubmit={()=>{
        SubmitHandle()
      }}>
       <input type="text"
       placeholder='Enter your Email'
       value={email} 
       onChange={(e)=>{
        setEmail(e.target.value)
       }}
       /> 
       

        <input type="password" 
         value={pass}
        placeholder='Enter your Password'
         onChange={(e)=>{
        setPass(e.target.value)
       
       }}
         />
         <div><button  type="submit" disabled={!isValid}> Submit</button></div>
      </form>
      
      
    </div>
  )
}

export default App

