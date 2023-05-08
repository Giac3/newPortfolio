import React, { Suspense, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import  Navigate  from '../components/Navigate'

import job from '../assets/job.svg'
import vite from '../assets/vite.svg'
import { SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiLinkedin, SiNodedotjs, SiReact, SiTwitter, SiTypescript, SiVisualstudiocode, SiVite } from 'react-icons/si'

import { ImLocation2} from 'react-icons/im'
import { FaGraduationCap, FaScroll} from 'react-icons/fa'
import { TfiThought} from 'react-icons/tfi'
import { AiFillHome} from 'react-icons/ai'
import { GrContactInfo, GrContact} from 'react-icons/gr'
import { MdOutlineWork} from 'react-icons/md'
import home2 from '../assets/home2.svg'
import about2 from '../assets/about2.svg'
import work2 from '../assets/work2.svg'
import contact2 from '../assets/contact2.svg'

import { Environment, OrbitControls, PresentationControls, Stage, Stars } from '@react-three/drei'
import Planet from '../components/planet'
import Rocket from '../components/rocket'
import Box from '../components/box'

const About = ({aboutRef, homeRef, workRef, contactRef}:any) => {
  const pathRef = useRef<SVGSVGElement>(null)
  const isInView = useInView(pathRef)
  const [showJavaScript, setShowJavaScript] = useState(false)
  const [showReact, setShowReact] = useState(false)
  const [showTypeScript, setShowTypeScript] = useState(false)
  const [showHTML, setShowHTML] = useState(false)
  const [showCSS, setShowCSS] = useState(false)
  const [showNode, setShowNode] = useState(false)
  const [showVscode, setShowVscode] = useState(false)
  const [showVite, setShowVite] = useState(false)
  const [showFirebase, setShowFirebase] = useState(false)
  


  

  return (
    <div ref={aboutRef} className='w-screen h-[100%] flex items-center justify-center'>
      <div className='w-screen h-screen  bg-black'>
        <div className='w-[100%] h-[15%] justify-between items-center flex p-4 absolute'>
          <div className='flex items-start '>
            <div className='flex shadow-md rounded-md z-40'>
          <div className='bg-purple-300 rounded-tr-none rounded-br-none p-1 rounded-md w-[110px] aspect-square'>
            <img draggable={false} src='headshot.jpeg' className='rounded-md'/>
          </div>
          <div>
          <h1 className='text-xl font-bold font-display bg-purple-300 p-1 text-white rounded-tr-md '>Giacomo Pessotto</h1>
          <div className='bg-white p-1 rounded-br-md h-[75px]'>
          <h2 className='flex gap-1 items-center text-sm font-bold font-display '>
            <MdOutlineWork/>
            Full Stack Developer</h2>
          <h3 className=' flex gap-1 text-sm font-bold font-display'>
            <ImLocation2/>
            United Kingdom</h3>
          <div className='flex gap-2 h-7 items-center'>
          <a href="https://www.linkedin.com/in/giacomo-pessotto-476513187/"  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-7 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-7 flex items-center justify-center'>
        <SiLinkedin className='scale-150 text-blue-400'/>
        </a>
        <a href="https://twitter.com/_SparkUp_"  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-7 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-7 flex items-center justify-center'>

        <SiTwitter className='scale-150 text-blue-300'/>
        </a>
        <a href="https://github.com/Giac3"  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-7 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-7 flex items-center justify-center'>
        <SiGithub className='scale-150 text-gray-600'/>
        </a>
          </div>
          </div>
          </div>
          </div>
        </div>
        </div>
        <div className='w-screen  h-screen flex items-center justify-center absolute'>
          <Canvas  dpr={[1, 2]} shadows={{ autoUpdate: true }} camera={{ fov: 45, position: [10, 2, 3] }}>
            <ambientLight intensity={0.5} />
            <OrbitControls maxDistance={10} minDistance={3}/>
            <Stars/>
            <Planet/>
            <Rocket/>
            <Box position={[-0.2,0.3,1.1]}/>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default About 
