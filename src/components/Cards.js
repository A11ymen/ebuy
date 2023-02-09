import React from 'react'


const Cards = (props) => {
    
  return (
    <>
    <div className='col-3'>
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt='pic' className='card_img'></img>
                <div className='card_info'>
                    <h3 className='card_title'>{props.title}</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards;
