import React, { useState } from 'react'
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom'

const SingleProduct = () => {
    const [orderedproduct,setorderedProduct] =useState(true);
  return (
    <>
      <Meta title={'Product| Ebuy'}/>
    <PageHead title='Product'/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div></div>
                    </div>
                </div>
                <div className='col-6'></div>
            </div>
        </div>
    </div>


    <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <h4>Description</h4>
                    <div className='bg-white p-3'>
                   
                    <p> jdjdjdjjdjddjdjjdjjdjdjddj</p></div>
                </div>
            </div>
        </div>
    </div>

    <section className='reviews-wrapper home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h3>Reviews</h3>
                    <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                                count={5}
                                value="4"
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 reviews</p>
                    </div>
                        </div>
                       {orderedproduct && (
                         <div>
                         <a className='text-dark text-decoration-underline' href=''>Write a review </a>
                     </div>
                       )}
                    </div>
                    <div className='review-form py-4'>
                        <h4 className='mb-2'>Write a Review</h4>
                    <form action=""  className='d-flex flex-column gap-15'>
                        <div>      <ReactStars
                                count={5}
                                value="4"
                                edit={true}
                                size={24}
                                activeColor="#ffd700"
                    /></div>
                  <div>
                    <textarea name='' 
                    id='' 
                    cols='30'
                    placeholder='Comments'
                    className='w-100 form-control'
                     rows='5'></textarea>
                  </div>
                  <div>
                    <button className='button text-white d-flex justify-content-end'>Submit</button>
                  </div>
                </form>
                    </div>
                    <div className='reviews mt-4'>
                        <div className='review '>
                            <div className='d-flex gap-10 align-items-center '>
                                <h6 className='mb-0'>Ahmed</h6>
                        <ReactStars
                                count={5}
                                value="4"
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                    /></div>
                    <p className='mt-3'>ldmdmd dkdkd dkdks idid did  ddks ss
                    </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default SingleProduct;
 