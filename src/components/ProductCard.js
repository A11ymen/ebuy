import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
const ProductCard = () => {
  return (
    <>
        <div className='col-4 d-flex '>
            <Link  to='product/:id' className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link><img src={'/images/wish.svg'} alt='pic'></img></Link>
                </div>
                <div className='product-image'>
                <img src={'/images/watch.jpg'} alt='pic'></img>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product_title'>Kids watch</h5>
                    <ReactStars
                                count={5}
                                value="4"
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                    />
                    <p className='description'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                    <p className='price'>Rs 4000</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <Link><img src={'/images/add-cart.svg'} alt="cart"></img></Link>
                    </div>

                </div>
              
                </Link>
                </div>
        </>
      
  
  )
}

export default ProductCard
