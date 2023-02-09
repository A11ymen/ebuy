import React from 'react'
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

 
const Ourstore = () => {
  return (
    <>
   <Meta title={'Our Store | Ebuy'}/>
    <PageHead title='Our store'/>
    <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'  style={{backgroundColor:'white'}}>
                        <h3 className='filter-title' >Shop by categories</h3>
                        <div>
                            <ul className='ps-0'>
                               <Link to = "/"> <li style={{color:'black'}}>Watch</li></Link><br/>
                               <Link to = "/">   <li style={{color:'black'}}>Beauty</li></Link><br/>
                               <Link to = "/"> <li style={{color:'black'}}>Fashion</li></Link><br/>
                               <Link to = "/"> <li style={{color:'black'}}>Toys</li></Link>
                            </ul>
                        </div>
                    </div>

                    {/* filter by */}

                    <div className='filter-card mb-3' style={{backgroundColor:'white'}}>
                    <h3 className='filter-title'>Filter by</h3>
                    <div>
                        <h6 className='sub-title'>Avaliability</h6>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id=''></input>
                            <label className='form-check-label' for=''>In stock</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' value='' id=''></input>
                            <label className='form-check-label' for=''>Out of stock</label>
                        </div>
                    </div>
                    <h6 className='sub-title'>Price</h6>
                    <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating'>
                       <input type='email'
                        className='form-control'
                        id="floatingInput" 
                        placeholder='From'/>
                     <label htmlFor="floatingInput">From</label>
                   </div>
                   <div className='form-floating'>
                       <input type='email' className='form-control py-1' id="floatingInput" placeholder='To'/>
                     <label htmlFor="floatingInput">To</label>
                   </div>
                    </div>
                    <h6 className='sub-title'>Rating</h6>
                    <div>
                    <div className='form-check '>
                            <input className='form-check-input' type='checkbox' value='' id=''></input>
                            <label className='form-check-label' for=''>4★ and above</label>
                        </div>
                    </div>
                    </div>
                    <div className='filter-card mb-3' style={{backgroundColor:'white'}}>
                    <h3 className='filter-title'>Product Tags</h3>
                    <div>
                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'> Headphone </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'> Lipstick </span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'> Mobile</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'> Necklace</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Perfume</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Rings</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Primer</span>
                        </div>
                    </div>
                    </div>
                </div>

                {/* here comes main right side product/grid section */}
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0 d-block' style={{width:"100px"}}>Sort by</p>
                            <select name='' className='form-control form-select' id=''>
                                <option value='best selling' selected='selected'>Best Selling</option>
                                <option value='title-ascending'>Alphabetically, A-Z</option>
                                <option value='title-descending'>Alphabetically, Z-A</option>
                                <option value='Price-descending'>Price, high to low</option>
                                <option value='Price-ascending'>Price, low to high</option>
                                <option value='Created-ascending'>Date, old to new</option>                           
                                <option value='Created-descending'>Date, new to old</option>
                                </select>
                        </div>
                    </div>
                    <div className='product-list pb-5'>
                       <ProductCard/>
                       <ProductCard/>
                       <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ourstore
