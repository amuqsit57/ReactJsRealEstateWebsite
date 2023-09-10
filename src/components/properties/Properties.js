import React from 'react'
import "./Properties.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
// import Swiper styles

import data from "./../../json files/properties.json"

import 'swiper/css';
import 'swiper/css/pagination';


const Properties = () => {
  return (
    <div className="main">
    <div className='properties'>
      
      <div className='text1'>
        <p className='t1'>Best Choices</p>
  
        <p className='t2'>Popular Residencies</p>
      </div>
    
      <div className='cards'>
        

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
            data.map((curr, i)=>(
            <SwiperSlide key={i}>

                <div className="cardView" >
                    <img src="https://th.bing.com/th?id=OIP.WP1Bd3MRkR8LjsFBnmeCPAHaEj&w=318&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" width={200} height={200}/>
                    <h3><span>$</span>{curr.price}</h3>
                
                    <h5>{curr.name}</h5>
                    <p>{curr.detail}</p>
                    
                </div>
                
            </SwiperSlide>
            
            ))
             
        }
      </Swiper>


      </div>

    </div>

    </div>
  )
}

export default Properties
