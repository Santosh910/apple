import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

  const router = useNavigate()
  return (
    <div className='container'>
      <div className="navbar">
        <div className="nav-list">
          <ul>
            <li><i class="fa-brands fa-apple"></i></li>
            <li>store</li>
            <li>mac</li>
            <li>ipad</li>
            <li>iphone</li>
            <li>watch</li>
            <li>airPods</li>
            <li>TV & Home</li>
            <li>entertainment</li>
            <li>accessories</li>
            <li>support</li>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li><i class="fa-regular fa-bag-shopping"></i></li>
          </ul>
        </div>

      </div>
      <div className="discount">
        <div className="dis-text">
          <h5>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</h5>
          <a href="#">shop now</a>
        </div>
      </div>
      <div className="backimg-ip" onClick={() => router(`/iphone15pro`)}>
        <div className="text-wrp">
          <h2>iPhone 15 Pro</h2>
          <h3>Titanium. So strong. So light. So Pro.</h3>
          <div className="anchor-tag">
            <a href="#">learn more</a>
            <a href="#">buy</a>
          </div>
        </div>

      </div>
      <div className="backimg-ip-1">
        <div className="text-wrp-1">
          <h2>iPhone 15 </h2>
          <h3>New camera.New design.Newphoria.</h3>
          <div className="anchor-tag">
            <a href="#">learn more</a>
            <a href="#">buy</a>
          </div>
        </div>

      </div>
      <div className="backimg-ip-2">
        
        <div className="text-wrp-2">
          <img src="https://www.apple.com/v/home/be/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9__eg5xcrxghuaa_medium.png" alt="" />
          <h3>New camera.New design.Newphoria.</h3>
          <div className="anchor-tag">
            <a href="#">learn more</a>
            <a href="#">buy</a>
          </div>
        </div>

      </div>
      
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
              <li onClick={() =>router('/icloud')}>icloud.com</li>
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

export default Homepage