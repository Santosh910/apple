import React, { useState } from 'react'
import api from './Axiosconfig'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

const Register = () => {
  const [userData,setUserData] = useState({name:"",number:"",email:"",password:""})

  const router = useNavigate()

  const handleChange = (event)=>{
    setUserData({...userData,[event.target.name]:event.target.value})
  }

  const sendData = async(event)=>{
    event.preventDefault()
    if(userData.name && userData.number && userData.email && userData.password  ){
           try{
               const response = await api.post('/auth/register',{userData})
               if(response.data.success){
                // alert("registration successfully")
                toast.success(response.data.messsage)
                setUserData({name:"",number:"",email:"",password:""})
                router('/signin')
               }
           }catch(error){
            toast.error(error?.messsage)
           }
    }else{
      alert("all data is mandotorry")
    }
  }
  return (
    <div>
        <h1>Create Your Apple ID </h1>
        <h5>One Apple ID is all you need to access all Apple services.</h5>
        
        <form onSubmit={sendData}>
            <input type="text" placeholder='enter your name' name='name' onChange={handleChange}/>
           <br />
           {/* <label>COUNTRY/REGION</label><br />
           <select name='country' onChange={handleChange}>
            <option>United states</option>
            <option>United arab</option>
            <option>India</option>
            <option>Canada</option>
            <option>UK</option>
            <option>china</option>
            <option>Australia</option>
           </select><br /> */}
           
           <input type="email" name='email' onChange={handleChange} /><br />
           <p>This will be your new Apple ID.</p><br />
           <input type="password" name='password' onChange={handleChange}/><br />
            
            <input type="number" name='number' onChange={handleChange}/><br />
            
           <input type="submit" value="submit" />


        </form>
    </div>
  )
}

export default Register