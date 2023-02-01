import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
const Home = () => {
  useEffect(() => {
    console.log("Home Page");
  }, []);

  return (
    
    <>
    <section classname='home-wrapper-1 py-5'>
      <Carousel fade>
      <Carousel.Item>
        <img className="img-fluid d-block w-100" src={'/images/car1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={'/images/women-cloth-main.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={'/images/mobile-main.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container.xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items center justify-content-between'>
              <div>
                <img src={'images/service.png'} alt="services"></img>
                <div>
                  <h6>Free shipping</h6>
                  <p>for all orders over 2500</p>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default Home;
