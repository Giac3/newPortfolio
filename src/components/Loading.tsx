import React from 'react'
import { motion } from 'framer-motion'


const Loading = () => {
  return (
    <div className='bg-[#B9DFF4] w-screen flex-col h-screen absolute flex items-center justify-center z-50 gap-2'>
        <h1 className=' font-display text-white font-bold text-2xl'>Just a moment</h1>
        <div className='flex gap-2'>
        <div className='w-4 h-4 animate-bounce bg-white rounded-full shadow-md'></div>
        <div className='w-4 h-4 animate-bounce animation-delay-300 bg-white rounded-full shadow-md'></div>
        <div className='w-4 h-4 animate-bounce animation-delay-500 bg-white rounded-full shadow-md'></div>
        </div>
    </div>
  )
}

export default Loading
