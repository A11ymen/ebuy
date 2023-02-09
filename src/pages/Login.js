import React, { useEffect } from "react";
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';
import { Link } from "react-router-dom";

const Signin = () => {
  useEffect(() => {
    console.log("Sign In Page");
  }, []);

  return (
    <>
     <Meta title={'Login| Ebuy'}/>
    <PageHead title='Account'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='login-card'>
            <h3 className='text-center mb-3'>Login</h3>
            <form action="" className='d-flex flex-column gap-15'>
              <div>
                <input type="email" name='email' placeholder="Email" className='form-control'/>
              </div>
              <div className="mt-1">
                <input type="password" name='password' placeholder="Password" className='form-control'/>
              </div>
              <div>
                <Link to='/ForgetPass'>Forget Password?</Link>
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button className='button signup border-0' type="submit">Login</button>
                <Link className='button signup border-0' to='/Signup'>Signup</Link>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Signin;
