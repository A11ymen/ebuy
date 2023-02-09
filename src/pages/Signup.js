import React, { useEffect } from "react";
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';
import { Link } from "react-router-dom";

const Signup = () => {
  useEffect(() => {
    console.log("Sign Up Page");
  }, []);

  return (
    <>
        <Meta title={'Signup | Ebuy'}/>
    <PageHead title='Signup'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
      <div className="container-xxl">
      <div className='row'>
        <div className='col-12'>
          <div className='login-card'>
            <h3 className='text-center mb-3'>Signup</h3>
            <form action="" className='d-flex flex-column gap-15'>
            <div>
                <input type="text" name='name' placeholder="Username" className='form-control'/>
              </div>
              <div>
                <input type="tel" name='mobile' placeholder="Mobile no." className='form-control'/>
              </div>
              <div>
                <input type="email" name='email' placeholder="Email" className='form-control'/>
              </div>
              <div className="mt-1">
                <input type="password" name='password' placeholder="Password" className='form-control'/>
              </div>
              <div>
             
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button className='button signup border-0'>Signup</button>
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

export default Signup;
