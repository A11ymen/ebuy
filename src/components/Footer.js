import React from "react";
import { Link } from "react-router-dom";
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-0'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-4 '>
              <h4 className='text-white mb-4'>Customer Care</h4>
              
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>How to buy</Link>
                <Link className='text-white py-2 mb-1'>Became a seller</Link>
                <Link className='text-white py-2 mb-1' >FAQs</Link>
                <Link className='text-white py-2 mb-1'>Contact us</Link>
              </div> 

              <div className='social_icons '></div>
              <a className='flex-row ms-2 text-white '  href="www.facebook.com"> 
             <BsFacebook />
              </a>
              <a className='flex-row ms-2 text-white '  href="www.instagram.com"> 
                <BsInstagram />
              </a>
              <a className='flex-row ms-2 text-white '  href="www.twitter.com">
                <BsTwitter/>
              </a>
            </div>

            <div className='col-3 ' >
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy policy</Link>
                <Link className='text-white py-2 mb-1'>Refund policy</Link>
                <Link className='text-white py-2 mb-1' >Shipping policy</Link>
                <Link className='text-white py-2 mb-1'>Returns & Refunds</Link>
              </div>
        
            </div>

            <div className='col-3 '>
              <h4 className='text-white mb-4' >Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Home</Link>
                <Link className='text-white py-2 mb-1'>About us</Link>
                <Link className='text-white py-2 mb-1' >Terms & conditions</Link>
              </div>
        
            </div>

            <div className='col-2 '>
              <h4 className='text-white mb-4' >Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Electronics</Link>
                <Link className='text-white py-2 mb-1'>Sports</Link>
                <Link className='text-white py-2 mb-1' >Accessories</Link>
                <Link className='text-white py-2 mb-1'>Home & Lifestyle</Link>
              </div>
        
            </div>
          </div>
        </div>
</footer>



    {/* this is another footer @2023 powered by ebuy */}
<footer className='py-0'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} powered by E-buy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
