import React, { useState } from 'react'
import "./header.css"
import {motion} from "framer-motion";

const menuImg = 'https://th.bing.com/th/id/R.295345104a55065921fd335fd8b4cd38?rik=rVUHo5OaehEPhg&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f03%2fhamburger-menu-icon_354355.png&ehk=h%2f05M%2bDCK%2fAgSEGGLRUfUloIIK8Ty1ZLlCkLH2i%2bmeY%3d&risl=&pid=ImgRaw&r=0';

// const [menuLink, setMenuLink] = useState("");
const Header = () => {
  return (
   
    

      <div className="header">

        <motion.div
        
        
        
        
        
        
        initial={{ x:-100 }}
        animate={{ x:0}}
        transition={{
            duration:0.5
        
        }}
      
        className="web_name">
            <h4>Homez</h4>
        </motion.div>
        
        <motion.div
        
        
        



        initial={{ x:100 }}
        animate={{ x:0}}
        transition={{
            duration:0.5
        
        }}
      
        className='link'>

        <a href="#f">Residencies</a>
        
        <a href="#f">Our Value</a>
        <a href="#f">Contact Us</a>
        <a href="#f">Get Started</a>

        <button>Contact</button>
        
        </motion.div>
        
      </div>


  )
}

const toggle=() =>{
 
    console.log();
}

export default Header
