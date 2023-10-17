import React from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const router = useNavigate()
    return (
        <div className='container-si'>
            <div className="sign-no">
                <img src="https://www.icloud.com/system/icloud.com/2326Project187/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg" alt="" />
                <h1>sign in with apple ID</h1>
                <form className="input-arrow" >
                    <input type="number/email" required placeholder='Email or Phone Number' />
                    <i onClick={() => router('/')} class="fa-solid fa-arrow-right"></i>
                </form>

                <div className="input-keep">
                    <input type="checkbox" />
                    <h4>keep Me Signed In</h4>
                </div>

                <div className="anchor-pass">
                    <p>forgot password?</p> </div>
                <div className="anchor-pass-1">
                    <p>create apple ID</p>
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