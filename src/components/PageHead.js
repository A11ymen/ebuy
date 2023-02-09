// this is used as heading of every page like if i open our store page it will come like home/ourstore
// same goes for every other page
import React from 'react'
import { Link } from 'react-router-dom'

const PageHead = (props) => {
    const {title}= props;
  return (
    <div className='pagehead mb-0 py-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center heading-style mb-0'>
                        <Link to="/" className='text-dark'> Home&nbsp;  </Link> / {title} 
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default PageHead
