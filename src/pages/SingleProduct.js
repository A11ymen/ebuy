import React from 'react'
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';

const SingleProduct = () => {
  return (
    <>
      <Meta title={'Product| Ebuy'}/>
    <PageHead title='Product'/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>
        </div>
    </div>
    <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='bg-white p-3'> jdjdjdjjdjddjdjjdjjdjdjddj</p>
                </div>
            </div>
        </div>
    </div>
    <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>

                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default SingleProduct;
 