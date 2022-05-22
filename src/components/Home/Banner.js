import React from 'react'
import { Carousel } from 'react-bootstrap'
import slider1 from '../../assets/img/1.png'
import slider2 from '../../assets/img/2.png'
import slider3 from '../../assets/img/3.png'
import slider4 from '../../assets/img/4.png'
import slider5 from '../../assets/img/5.png'
const Banner = () => {
  return (
    <div className='p-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded-1'
            src={slider1}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 className='text-warning'>Drill Kit with 60PCS Accessories</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded-1'
            src={slider2}
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 className='text-warning'>Cordless Drill Kit & Accessories</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded-1'
            src={slider3}
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3 className='text-warning'>Angle Grinder</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded-1'
            src={slider4}
            alt='Forth slide'
          />

          <Carousel.Caption>
            <h3 className='text-warning'>Hammer&Breaker</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 rounded-1'
            src={slider5}
            alt='Fifth slide'
          />

          <Carousel.Caption>
            <h3 className='text-warning'>Cordless Drill</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
