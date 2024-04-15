import React from 'react';
import './Footer.css';
import logo from '../assets/LOGO 2.png';
export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='first_footer'>
          <div>
            <img src={logo} />
          </div>
          <div>
            <div className='footer_download'>

              <div className='app_store'>
                <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg' />
                <p className='sui'>Download on the</p>
                <p className='suii'>AppStore</p>
              </div>

              <div className='play_store'>
                <img src='https://www.gizchina.com/wp-content/uploads/images/2021/12/Play-Store.jpg' />
                <p className='ok'>Download on the</p>
                <p className='okay'>Google</p>
              </div>
            </div>
          </div>
          <div className='copy_right'>
            <p>Company # 490039-445, Registered with<br /> House of Companies.</p>
          </div>
        </div>
        <div className='second_footer'>
          <div className='deals'>
            <p>Get Exclusive Deals in your Inbox</p>
          </div>
          <div className='search'>
          <input type="text" placeholder="youremail@gmail.com"/>
          <button>Subscribe</button>

          </div>
          <div className='policy'>
            <p className='spam'>
              we wont spam, read our
            </p>
            <p className='email'> email policy</p>
          </div>
          <div className='socials'>
            <img src='https://cdn.creazilla.com/illustrations/1721827/facebook-icon-flat-fb-logo-illustration-md.png'/>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-black-glyph-900x900.png'/>
            <img src='https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338430_1280.png'/>
            <img src='https://cdn5.vectorstock.com/i/1000x1000/11/54/snapchat-logo-messenger-icon-realistic-social-vector-46321154.jpg'/>
          </div>

        </div>
        <div className='third_footer'>
          <div className='legal'>
          <p>Legal Pages</p></div>
          <div className='tos'>
          <p>Terms and conditions</p>
          <p>privacy</p>
          <p>
            Cookies
          </p>
          <p>Modern Slavery Statement</p>
          </div>
        </div>






        <div className='forth_footer'>
          <div className='links'>
          <p>Important Links</p></div>
          <div className='help'>
          <p>Get help</p>
          <p>Add your restaurant</p>
          <p>
          Sign up to deliver
          </p>
          <p>Create a business account</p>
          </div>
        </div>
































        <div>

        </div>
      </div>
    </div>
  );
}
