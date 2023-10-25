import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./Buy.css"

const Buy = () => {
    const [product, setProduct] = useState([
        {
            title1: "iPhone 14 &",
            title2: "iPhone 14 Pro Max",
            image: "asset/iphone-14.jpg",
            Emi: "From  ₹21483.00/mo.with instant savings"

        },
        {
            title1: "iPhone 15 Pro &",
            title2: "iPhone 15 Pro Max",
            image: "asset/iphone-15pro-gray.jpg",
            Emi: "From  ₹21483.00/mo.with instant savings"
        },
        {
            title1: "iPhone 15 Pro &",
            title2: "iPhone 15 Pro Max",
            image: "asset/iphone-15pro.jpg",
            Emi: "From  ₹21483.00/mo.with instant savings"
        }
    ])
    const [sideNav, setSideNav] = useState(false)
    console.log(sideNav)
    const router = useNavigate()
    return (
        <div className='container-buy'>
            <div className="navbar-buy">
                <div className="nav-list-buy">
                    <ul>
                        <li><i class="fa-brands fa-apple"></i></li>
                        <li onClick={() => router('/store')} >store</li>
                        <li>mac</li>
                        <li>ipad</li>
                        <li>iphone</li>
                        <li>watch</li>
                        <li>airPods</li>
                        <li>TV & Home</li>
                        <li>entertainment</li>
                        <li>accessories</li>
                        <li onClick={() => router('/icloud')}>support</li>
                        <li><i class="fa-solid fa-magnifying-glass"></i></li>
                        <li><i class="fa-solid fa-bag-shopping"></i></li>
                    </ul>
                </div>

            </div>


            <div className="discount-buy">
                <div className="dis-text-buy">
                    <h5>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</h5>
                    <a href="#">shop now</a>
                </div>
            </div>

            <div className="note-buy">
                <div className="note-flex-buy">
                    <h1>Shop iPhone</h1>
                    <div className="visit-buy">

                        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-chat-specialist-icon-202305_AV2?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1684947928853" alt="" />
                        <p>Need shopping help?<br />
                            Ask a Specialist</p>

                    </div>
                </div>
            </div>

            <div className="title-buy">
                <ul>
                    <li><b><u>All Models</u></b></li>
                    <li>Festive specials</li>
                    <li>Shopping Guides</li>
                    <li>Accessories</li>
                    <li>set and support</li>

                </ul>
            </div>

            <div className="latest-pro-buy">
                <div className="latest-pro-head-buy">
                    <h2>All models. <span>Take your pick.</span> </h2>
                </div>
                <div className="latest-pro-list-buy" onClick={() => setSideNav(!sideNav)}  >
                    {product.length &&
                        <div className='single-flx-buy'>{product.map((pro) => (
                            <div className='flexbox-buy'>
                                <h3 style={{color:"orange",textAlign:"left",marginLeft:"30px"}}>New</h3>
                                <h2>{pro.title1}</h2>
                                <h2>{pro.title2}</h2>
                                <img src={pro.image} />
                                <h5>{pro.Emi} <button>Buy</button></h5>
                            </div>))}
                        </div>}

                </div>
            </div>


            {
                sideNav ? (
                    <div className='iphone-15pro-slide-buy' onClick={() => setSideNav(!sideNav)}></div>
                ) : ("")
            }
            {
                <div>
                    {
                        sideNav ?
                            <div className="main-box-iphone-15">
                                <div className="iphone-pro-bar">
                                    <button>iPhone 15 Pro</button>
                                </div>
                                <div>
                                    <i id='close-button' onClick={() => setSideNav(!sideNav)} class="fa-solid fa-xmark"></i>
                                </div>

                                <div className="i-phone-buy-box">
                                    <div className="iphone-flex-lft-rgt">
                                        <div className='iphone-left'>
                                            <button>iPhone 15pro</button>
                                            <img src="asset/iphone-15gray.png" alt="" />
                                        </div>


                                        <div className='iphone-right'>
                                            <div className="ipn-rgt-1">
                                                <h5>NEW</h5>
                                                <h1>IPhone-15Pro</h1>
                                                <h6>From ₹21483.00/mo.Per Month with instant savings§§<br />  and No Cost EMI§Footnote or ₹134900.00Footnote‡ <button>Buy</button></h6>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                            <div className="ipn-rgt-2">

                                                <h4>15.5 cm (6.1-inch) Super Retina XDR display footnote ¹ featuring ProMotion, Always-On and Dynamic Island</h4>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="iphone-flex-bottom">
                                        <div className="iph-flex-1-btm">
                                            <i class="fa-regular fa-credit-card" style={{ color: "#36ba1c" }}></i>
                                            <div className="emi-pay">
                                                <h4>Flexible ways to pay</h4>
                                                <h5>No Cost EMI§ and EMI◊◊ available.</h5>
                                            </div>
                                        </div>
                                        <div className="iph-flex-1-btm">

                                        </div>
                                        <div className="iph-flex-1-btm">

                                        </div>
                                    </div>




                                </div>
                            </div>
                            :
                            <div className="sidebar-dontshow"><i id='close-button' onClick={() => setSideNav(!sideNav)} class="fa-solid fa-xmark"></i></div>
                    }
                </div>
            }


            <div className="footer">
                <div className="footer-1">
                    <div className="footer-1-1">
                        <p>*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</p>
                        <hr />
                    </div>
                    <div className="footer-list">
                        <ul className="list-1">
                            <h5>Shop</h5>
                            <li>store</li>
                            <li>mac</li>
                            <li>ipad</li>
                            <li>iphone</li>
                            <li>watch</li>
                            <li>airpods</li>
                            <li>airtag</li>
                        </ul>
                        <ul className="list-2">
                            <h5>account</h5>
                            <li>manage your apple id</li>
                            <li>apple store account</li>
                            <li>icloud.com</li>
                        </ul>
                        <ul className="list-3">
                            <h5>Apple Store</h5>
                            <li>Find a Store</li>
                            <li>Genius Bar</li>
                            <li>Today at Apple</li>
                            <li>Apple Camp</li>
                            <li>Apple Trade In</li>
                            <li>Ways to Buy</li>
                            <li>Recycling Programme</li>
                            <li>Order Status</li>
                            <li>Shopping Help</li>
                        </ul>
                        <ul className="list-4">
                            <h5>For Business</h5>
                            <li>Apple and Business</li>
                            <li>Shop for Business</li>
                            <h5>For Education</h5>
                            <li>Apple and Education</li>
                            <li>Shop for Education</li>
                            <li>Shop for University</li>
                        </ul>
                        <ul className="list-5">
                            <h5>Apple Values</h5>
                            <li>Accessibility</li>
                            <li>Education</li>
                            <li>Environment</li>
                            <li>Privacy</li>
                            <li>Supplier Responsibility</li>
                        </ul>

                    </div>
                    <div className="footer-coprgt">

                        <p>India
                            Copyright © 2023 Apple Inc. All rights reserved.Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
                        <p>India</p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Buy