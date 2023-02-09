import React from 'react'
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ForgetPass = () => {
  return (
    <>
     <Meta title={'Forget Password | Ebuy'}/>
    <PageHead title='Account'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='login-card'>
            <h3 className='text-center mb-3'>Reset your password</h3>
            <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
            <form action="" className='d-flex flex-column gap-15'>
              <div>
                <input type="email" name='email' placeholder="Email" className='form-control'/>
              </div>
              <div>
                
                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                <button className='button signup border-0' type='submit' to='/ResetPassword'>Submit</button>
                <Link  to='/Login'>Cancel</Link>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default ForgetPass
