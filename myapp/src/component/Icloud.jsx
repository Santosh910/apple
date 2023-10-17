import React from 'react'
import './Icloud.css'
import { useNavigate } from 'react-router-dom'

const Icloud = () => {
    const router = useNavigate()
    return (
        <div className='container-icl'>
            <div className="ani-name-col">
                <video src="asset\animation video.mp4" width="430" height="388" autoPlay
                playsInline loop x-webkit-airplay="deny" title="Animation showing different users' Memojis surrounded by the icons of the apps the user personally uses most"></video>

                <h1>iCloud</h1>
                <button onClick={() => router('/signin')}>Sign In</button>
                <p>The best place for all your photos, files, notes, mail, and more.</p>
            </div>

            <div className="icloud-flex">
                <div className="icloud-flex-img">
                    <div className="icloud-flex-1">
                        <img src="https://www.icloud.com/system/icloud.com/2326Project187/e6ffc52737977fe1700d423a10874d0b.png" alt="" />
                        <h2>Easily access apps and data from your iPhone on the web</h2>
                        <p>iCloud is essential for keeping personal information from your devices safe, up to date, and available wherever you are. At iCloud.com, you can access your photos, files, and more from any web browser. Changes you make will sync to your iPhone and other devices, so you’re always up to date.</p>

                    </div>
                    <div className="icloud-flex-2">
                        <img src="https://www.icloud.com/system/icloud.com/2326Project187/c63858bf09261d1e1c206e3930b013d3.png" alt="" />
                        <h2>More storage plus additional features to protect your privacy</h2>
                        <p>Upgrade to iCloud+ to get more storage and additional features like iCloud Private Relay, Hide My Email, and HomeKit Secure Video. You can even share your subscription with your family. Learn more at apple.com/icloud.</p>

                    </div>
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

export default Icloud