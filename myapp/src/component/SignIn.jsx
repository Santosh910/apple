import React, { useState } from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'
import api from './Axiosconfig'
import {toast} from 'react-hot-toast'
import { useContext } from 'react'
import { AuthContext } from './Auth.context'

const SignIn = () => {
    const [userData,setUserData] = useState({email:""})
    const{Login} = useContext(AuthContext)

    const handleChange =(event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }

    const sendDdata =async (event)=>{
        event.preventDefault();
        if(userData.email){
                try{
                    const response = await api.post("/auth/login",{userData})
                  // const response = { data: { success: true } };
                  if (response.data.success) {
                    localStorage.setItem("my-token",JSON.stringify(response.data.token))
                    Login(response.data.user)
                    console.log(response.data,"response data")
                      toast.success(response.data.message)

                      setUserData({  email: ""})
                      router('/')}
                }catch(error){
                    toast.error(error?.response.data.message)
                }
        }else{
            alert("all data is mandotory")
        }
    }

    const router = useNavigate()
    return (
        <div className='container-si'>
            <div className="sign-no">
                <img src="https://www.icloud.com/system/icloud.com/2326Project187/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg" alt="" />
                <h1>sign in with apple ID</h1>
                <form className="input-arrow" >
                    <input type="email" required placeholder='Email or Phone Number' name='email' onChange={handleChange}/>
                
                    <i onClick={sendDdata} class="fa-solid fa-arrow-right"></i>
                </form>

                <div className="input-keep">
                    <input type="checkbox" />
                    <h4>keep Me Signed In</h4>
                </div>

                <div className="anchor-pass">
                    <p>forgot password?</p> </div>
                <div className="anchor-pass-1">
                    <p onClick={()=>router('/register')}>create apple ID</p>
                </div>

            </div>

            <div className="footer-icl">
                <div className="footer-icl-flex">
                    <div className="ft-flex-1">
                        <ul>
                            <li>system status</li>
                            <li>privacy policy</li>
                            <li>terms & conditions</li>
                        </ul>
                    </div>
                    <div className="ft-flex-2">
                        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn