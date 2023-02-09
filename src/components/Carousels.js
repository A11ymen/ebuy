import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousels = (props) => {
  return (
    <div style={{margin:'20px'}}>
      <div className="container-xxl">
        <div className='row'>
          <div className='col-12'>
        <Slider autoplay autoplaySpeed={2000} dots initialSlide={2} infinite>
                    <div>
                        <img src={'/images/car1.jpg'}  style={{width:"100%", height:"60vh", borderRadius:"10px"}}></img>
                    </div>
                    <div>
                        <img src={'/images/women-cloth-main.jpg'}  style={{width:"100%", height:"60vh", borderRadius:"10px"}}></img>
                    </div>
                    <div>
                        <img src={'/images/mobile-main.jpg'}  style={{width:"100%", height:"60vh", borderRadius:"10px"}}></img>
                    </div>
        </Slider>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Carousels;
