import React from 'react'
import PageHead from '../components/PageHead'
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
    <Meta title={'Wishlist | Ebuy'}/>
    <PageHead title='wishlist'/>
    <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative' style={{width:'100'}}>
                       <img src={'/images/cross.svg'} alt='pic' className='position-absolute- cross img-fluid '/>
                        <div className='wishlist-card-image'>
                            <img src={'/images/watch.jpg'} className='img-fluid w-100' alt='pic'/>
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>Samsung smart Watch, high quality,water proof </h5>
                                <h6 className='price'>Rs 1600</h6>
                                </div>

                        
                    </div>

                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative' style={{width:'100'}}>
                       <img src={'/images/cross.svg'} alt='pic' className='position-absolute- cross img-fluid '/>
                        <div className='wishlist-card-image'>
                            <img src={'/images/watch.jpg'} className='img-fluid w-100' alt='pic'/>
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title'>Samsung smart Watch, high quality,water proof </h5>
                                <h6 className='price'>Rs 1600</h6>
                                </div>

                        
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Wishlist
