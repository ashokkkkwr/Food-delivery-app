import React from 'react';
import logo from "../assets/logo-1.png";
import secondimg from "../assets/Group 8.png";
import firstimg from '../assets/Rectangle 8.png';
import friends from '../assets/friends-laughing-using-mobiles 2.png';
import './SecondCarousel.css';

export default function SecondCarousel() {
  return (
    <div>
      <div id='main'>
        <div id='contain'>
          <div className='ordering'>
            <img src={logo} alt="My Image" />
            <p>ing is more</p>
          </div>
          <div className='second'>
            <div className='perins'>
              <p className='person'>Personalised</p>
              <p className='instant'>& Instant  </p>
            </div>
          </div>
          <div className='para'>
            <p>Download the Order.uk app for faster ordering</p>
          </div>
          <div className='download'>
            <div className='down1'>
              <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg'/>
              <p>Download on the</p>
              <p>AppStore</p>
            </div>
            <div className='down2'>
              <img src='https://www.gizchina.com/wp-content/uploads/images/2021/12/Play-Store.jpg'/>
              <p>Download on the</p>
              <p>Google</p>
            </div>
          </div>
        </div>
        <div className='friends'>
          <img src={friends} alt="My Image" />
        </div>
      </div>
      <div className="whole">
        <div className="cheif">
          <div className='cheif1'>
          <p className='para1'>Earn more with lower fees</p>
          <p className='para2'>Signup as a business</p>
          <p className='para3'>Partner with us</p>
          <div className='get'>
            <p>
            Get Started
            </p>
          </div>
          </div>
          <img src={firstimg} alt="My Image" />
        </div>
        <div className='cheif'>
        <div className='cheif1'>
          <p className='para1'>Avail exclusive perks</p>
          <p className='para2'>Signup as a Rider</p>
          <p className='para3'>Ride with us</p>
          <div className='get'>
            <p>
            Get Started
            </p>
          </div>
          </div>
          <img src={secondimg} alt="my image"/>
        </div>
      </div>
    </div>
  )
}
