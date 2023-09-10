import React from 'react'
import "./middle.css"
import { motion } from "framer-motion"

const Middle = () => {
  return (
    <div className='middle'>


        <motion.div
        
        
        
        
        
        
        
        initial={{ x:-100 }}
        animate={{ x:0}}
        transition={{
            duration:0.5
        
        }}
      
        className="effect">

        </motion.div>

        <div className="left_middle">


        <motion.div 
           
           initial={{ x:-100 }}
           animate={{ x:0}}
           transition={{
               duration:0.5
           
           }}
         
        className="text">
            <p className='p1'>Discover <div className='org_circle' ></div> <br />
                Most Suitable <br />
                Property

            </p>


        </motion.div>


            

            <motion.div
            
            initial={{ x:-100 }}
            animate={{ x:0}}
            transition={{
                duration:0.5
            
            }}
    
            
            className="search_box">

            <div className='search'>


                   <div className="img"></div>
                
                    <button>Search</button>
            </div>
            
            </motion.div>
            <motion.div 
            
            initial={{ y:-100 }}
            animate={{ y:0}}
            transition={{
                duration:0.5
            
            }}
    
            className="cont">
                <div className="box1">
                    <div className="num">
                        <h2>9000</h2>
                        <div className="icon"></div>
                    </div>
                    <p className='p2'>Premium Product</p>


                </div>
                <div className="box2">
                    <div className="num">
                        <h2>9000</h2>
                        <div className="icon"></div>
                    </div>
                    <p className='p2'>Happy Customer</p>
                </div>
                <div className="box3">
                <div className="num">
                        <h2>9000</h2>
                        <div className="icon"></div>
                    </div>
                    <p className='p2'>Awards Winning</p>
                </div>
            </motion.div>

        </div>
        <div className="right_middle">

            <motion.div
            









            initial={{ x:500 }}
            animate={{ x:0 }}
            transition={{
                duration:0.5
            
            }}
            className="middle_img">










            </motion.div>
        </div>


    </div>
  )
}

export default Middle
