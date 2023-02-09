import React, { useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import  Marquee  from "react-fast-marquee";
import Cards from "../components/Cards";
import ProductCard from "../components/ProductCard";
import cdata from "../Cdata"
import fdata from "../FeaturedProd"
import Carousels from "../components/Carousels";
import SpecialProd from "../components/SpecialProd";


const Home = () => {
  useEffect(() => {
    console.log("Home Page Component");
  }, []);
  return (
    <>
    <section classname='home-wrapper-1 py-5'>
    
      <Carousels/>
      
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container.xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src={'images/service.png'} alt="services"></img>
                <div>
                  <h5>Free shipping</h5>
                  <p className='mb-0'>for all orders over 2500</p>
                </div>
              </div>

              <div className='d-flex align-items-center gap-15'>
              <img src={'images/service-02.png'} alt="services"></img>
                <div>
                  <h5>Offers</h5>
                  <p className='mb-0'>save upto 10% off</p>
              </div>
              </div>
              
              <div className='d-flex align-items-center gap-15'>
              <img src={'images/service-03.png'} alt="services"></img>
                <div>
                  <h5>Support 24/7</h5>
                  <p className='mb-0'>shop with ease</p>
              </div>
              </div>

              <div  className='d-flex align-items-center gap-15'>
              <img src={'images/service-04.png'} alt="services"></img>
                <div>
                  <h5>Affordable prices</h5>
                  <p className='mb-0'>factory default prices</p>
              </div>
              </div>

              <div className= 'd-flex align-items-center gap-15'>
              <img src={'images/service-05.png'} alt="services"></img>
                <div>
                  <h5>Secure payment</h5>
                  <p className='mb-0'>100% protected payment</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className='card-wrapper-2 py-5 home-wrapper-2 '>
      
    <div className='container.xxl'>
        <div className='row'>
          <div className='col-12'>
          <h3 className='heading-style'>Categories</h3>
            <div className='categories d-flex flex-wrap'>
              <div className='d-flex gap-10 align-items-center' >
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/camera.jpg'} alt='camera' ></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Beauty</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/makeup-category.jpg'} alt='makeup'></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Fashion</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/fashion-cateory.jpg'} alt='camera'></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/tv.jpg'} alt='camera'></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Sports</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/sports-cate.jpg'} alt='sports'></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Furniture</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/furniture.jpg'} alt='furniture'></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Accessories</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/accessories.jpg'} alt='accessories'></img>
              </div>

              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Mobile</h6>
                  <p>10 items</p>
                </div>
                <img src={'/images/mobile.jpg'} alt='mobile'></img>
              </div>

            </div>
          </div>
        </div>
      </div>
       {/* <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <h3 className='heading-style'>Categories</h3> 
          </div>
          {cdata.map((val) =>
          {
            return(
              <Cards imgsrc={val.imgsrc} title={val.category_name}/>
            );
          })}
        </div>
        </div>  */}
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 ' >
          <h3 className='heading-style'>Featured Product</h3> 
          </div>
          
          {fdata.map((val) =>
          {
            return(
            
              <ProductCard imgsrc={val.imgsrc} title={val.Brand_name}
              description={val.description} price={val.price}/>
             
              
            );
          })}
        
        </div>
        </div>
    </section>
    <section className='special-wrapper py-5 home-wrapper-2' >
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='heading-style'>Special Products</h3>
          </div>
        </div>
        <div className='row '>
          <SpecialProd/>
          <SpecialProd/>
          <SpecialProd/>
        </div>
      </div>

    </section>
    <section className='marque-wrapper py-1'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src={'/images/brand-01.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-02.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-03.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-04.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-05.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-06.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-07.png'} alt='brand'/>
              </div>
              <div  className='mx-4 w-25'>
                <img/>
                <img src={'/images/brand-08.png'} alt='brand'/>
              </div>
                 </Marquee>
            </div>

          </div>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default Home;
