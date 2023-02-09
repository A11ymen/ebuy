import React from 'react'
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';
import {AiFillHome} from 'react-icons/ai';
import {BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';
const Contact = () => {
  return (
    <>
    <Meta title={'Contact Us | Ebuy'}/>
    <PageHead title='Contact'/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850578.7834675824!2d72.52576124025832!3d33.61637228213136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675627418229!5m2!1sen!2s" 
          width="600" 
          height="450"
          className='border-0 w-100'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className=' mb-4 heading-style'>Contact</h3>
                <form action=""  className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' placeholder='Name'className='form-control'></input>
                  </div>
                  <div>
                    <input type='email' placeholder='Email' className='form-control'></input>
                  </div>
                  <div>
                    <input type='tel' placeholder='Mobile no.' className='form-control'></input>
                  </div>
                  <div>
                    <textarea name='' 
                    id='' 
                    cols='30'
                    placeholder='Comments'
                    className='w-100 form-control'
                     rows='5'></textarea>
                  </div>
                  <div>
                    <button className='button text-white'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='heading-style'>Get In-touch</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiFillHome className='fs-5'/>
                    <address className='mb-0'>219 Street 7, I-9/3 I 9/3 I-9, Islamabad, Islamabad Capital Territory 44000</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'> <BiPhoneCall className='fs-5'/><a href='+51 3453323'></a>+51 3453323</li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5' /><a style={{color:'black'}}href='mailto:ebuycontact@gmail.com'>ebuycontact@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact
