import React from 'react'
import Slider from "react-slick"
import './Slider.css'

function SlickSlider(props) {

    const {imgList}=props
    console.log(props)
    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
        
             <Slider {...settings} className="slider-main-class">
               {
               props.imgList.map(item=>{
                 return(
                  <img src={item.img} className='carousal-iamges'/>
                 )
               })}
               
            </Slider>
      
    )
}

export default SlickSlider
