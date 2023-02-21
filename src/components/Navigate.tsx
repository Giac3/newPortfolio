import React, { useEffect, useRef, useState } from 'react'
import { animate, animations, delay, motion, useAnimation, useAnimationControls } from 'framer-motion'

import { SiAboutdotme} from 'react-icons/si'
import { GrContactInfo} from 'react-icons/gr'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineWork} from 'react-icons/md'
import {GrContact} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale:0 }}
  whileInView={{ opacity: 1, scale:1 }}
  transition={{delay:0.2, duration:1}}
     className='bg-blue-50 h-[30%] ml-4 rounded-md shadow-custom2 w-[40px] '>
      
    </motion.div>
  )
}

export default Navigate
