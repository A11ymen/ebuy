import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className='header-upper py-2'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to='/' className='text-white'>
                  Ebuy
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Seach Product'
                  aria-label='Search Product'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3' id='basic-addon2'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  {" "}
                  <Link
                    to='/wishlist'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src='images/wishlist.svg' alt='wishlist' />
                    <p className='mb-0'> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/signup'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src='images/user.svg' alt='user' />
                    <p className='mb-0'>Signup </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/login'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src='images/user.svg' alt='user' />
                    <p className='mb-0'>Login</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/cart'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img src='images/cart.svg' alt='cart' />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark'>0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className='dropdown'>
                    <button
                      className='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center'
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img src='images/menu.svg' alt='menu'></img>
                      <span>Shop Categories </span>
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <Link to='#' className='dropdown-item text-white'>
                          Women Fashion
                        </Link>
                      </li>
                      <li>
                        <Link to='#' className='dropdown-item text-white'>
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link to='#' className='dropdown-item text-white'>
                          Toys
                        </Link>
                      </li>
                      <li>
                        <Link to='#' className='dropdown-item text-white'>
                          Beauty
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className='text-white' to='/'>
                      Home
                    </NavLink>
                    <NavLink className='text-white' to='/store'>
                      Our Store
                    </NavLink>
                    <NavLink className='text-white' to='/contact'>
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
