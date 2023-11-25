import React from 'react'
import WhatIDoData from '../Data/WhatIDoData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const WhatIDo = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };





  return (
    <>
    <div className='what-i-do'>
        <div className="title" data-aos="fade-left">
            What I Do ? 
            <div className="image">
                <img src={"https://t4.ftcdn.net/jpg/01/35/92/85/360_F_135928597_xU5EzKq6vpOeXPX5vsbI48zfVVkSRlrF.jpg"} alt="" />
            </div>
        </div>


        <Carousel responsive={responsive} draggable={true} showDots={true} infinite={true} autoPlaySpeed={1000}>
        {
            WhatIDoData.map((item , index)=>{
                return(
                    <>
                    
                    <div className="desc" key={index} data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
                      <div className='check'>
                        <i className="fa-solid fa-check"></i>
                      </div>

                      <div className='content'>
                      {item.do}
                  
                      </div>
                      <div className='rating'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star-half-stroke'></i>
                      </div>
                    </div>
                    </>
                )
            })
        }
        </Carousel>
        
    </div>

    </>
  )
}

export default WhatIDo
