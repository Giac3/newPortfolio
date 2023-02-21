import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import  Navigate  from '../components/Navigate'

import job from '../assets/job.svg'
import vite from '../assets/vite.svg'
import { SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiTypescript, SiVisualstudiocode, SiVite } from 'react-icons/si'

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
    <div ref={aboutRef} className='w-screen   h-screen top-0 sticky flex items-center'>
      
      <div className='w-screen h-screen bg-green-50 flex items-center justify-center'>
      <div className=' absolute z-20 mb-48 flex items-center'>
        <motion.button onClick={() => {homeRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-rose-50 rounded-full shadow-custom'> <AiFillHome className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.4] ml-5 mt-1' src={home2}/> </motion.button>
        <motion.button whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-green-50 border-2 border-purple-300 rounded-full shadow-custom'> <GrContactInfo className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> 
        <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.37] ml-5 mt-1' src={about2}/> </motion.button>
        <motion.button onClick={() => {workRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-blue-50 rounded-full shadow-custom'> 
        <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.4] ml-5 mt-1' src={work2}/> 
        <MdOutlineWork className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> </motion.button>
        <motion.button onClick={() => {contactRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-purple-50 rounded-full shadow-custom'> 
        <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.32] ml-7 mt-1' src={contact2}/>
        <GrContact className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> </motion.button>
      </div>
      <div className=' absolute mt-[440px] items-center flex flex-col'>
        <motion.div initial={{opacity:0}} animate={{opacity: isInView? 1 :0}} transition={{duration: 0.5, delay:1}} className='bg-rose-50 flex-row w-40 h-10 flex items-center justify-center shadow-custom2 rounded-3xl m-3'> 
        <ImLocation2/> &nbsp; United Kingdom</motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:isInView? 1 :0}} transition={{duration: 0.5, delay:1.2}} className='bg-rose-50 w-[500px] items-center justify-center flex h-10 flex-row shadow-custom2 rounded-3xl m-3'>
        <FaGraduationCap/> &nbsp; BSc in Theoretical Physics from  University College London
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:isInView? 1 :0}} transition={{duration: 0.7, delay:1.4}} className='bg-rose-50 w-[500px] flex items-center justify-center h-10 shadow-custom2 rounded-3xl m-3'>
        <TfiThought/> &nbsp; Passionate about Machine Learning & Front-End Development
        </motion.div>
        <a href='https://firebasestorage.googleapis.com/v0/b/spark-development-f6009.appspot.com/o/resumes%2FGiacomo%20Re%CC%81sume%CC%81.pdf?alt=media&token=4d4b8bf6-b15d-4f9b-b47a-77c7caccfd7d' rel="noopener noreferrer" target="_blank">
        <motion.div initial={{opacity:0}} animate={{opacity:isInView? 1 :0}} transition={{duration: 0.5, delay:1.6}} className='bg-rose-50 flex  cursor-pointer hover:bg-blue-100 duration-300 w-32 items-center justify-center h-10 shadow-custom2 rounded-3xl m-3'>
        <FaScroll/> &nbsp; My Résumé
        </motion.div></a>
      </div>
      <div  className=' z-10 -mt-20  w-[185px] h-[170px] shadow-custom2 absolute top-[155px] flex justify-center rounded-xl bg-rose-50 font-bold text-center flex-col font-display text-gray-500'>
        <motion.p initial={{opacity:0}} animate={{opacity: isInView? 1 : 0}}
        transition={{delay:0.8, duration: 1}}>Technologies I Use</motion.p>
        <hr></hr>
        <div className='  w-full grid-rows-3 grid-cols-3 grid h-full'>
          <motion.div onHoverStart={() => {setShowJavaScript(true)}} onHoverEnd={() => {setShowJavaScript(false)}}   initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1, duration: 0.6}}
          >
          <SiJavascript className='text-[#F0DB4F] bg-[#32332F] w-10 h-10 m-1 ml-2  shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowReact(true)}} onHoverEnd={() => {setShowReact(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.1, duration: 0.6}}>
          <SiReact className='text-[#61DBFB] ml-2  w-10 h-10 m-1 shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowTypeScript(true)}} onHoverEnd={() => {setShowTypeScript(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.2, duration: 0.6}}>
          <SiTypescript className='text-[#2D79C7] bg-white  w-10 h-10 m-1 ml-2 shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowHTML(true)}} onHoverEnd={() => {setShowHTML(false)}}  initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.3, duration: 0.6}}>
          <SiHtml5 className='text-[#E54C22]  w-10 h-10 m-1 ml-2 shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowCSS(true)}} onHoverEnd={() => {setShowCSS(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.4, duration: 0.6}}>
          <SiCss3 className='text-[#214CE5]  w-10 h-10 m-1 ml-2 shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowNode(true)}} onHoverEnd={() => {setShowNode(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.5, duration: 0.6}}>
          <SiNodedotjs className='text-[#539E43]  w-10 h-10 m-1 ml-2 shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowVscode(true)}} onHoverEnd={() => {setShowVscode(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.6, duration: 0.6}}>
          <SiVisualstudiocode className='text-[#48B0F4]  w-10 h-10 m-1 ml-2 shadow-custom'/>
          </motion.div>
          <motion.div onHoverStart={() => {setShowVite(true)}} onHoverEnd={() => {setShowVite(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.7, duration: 0.6}}>
          <img className=' w-10 h-10 m-1 ml-2 shadow-custom' src={vite} />
          </motion.div>
          <motion.div onHoverStart={() => {setShowFirebase(true)}} onHoverEnd={() => {setShowFirebase(false)}} initial={{scale:0}} animate={{scale: isInView? 1 : 0}} transition={{delay:1.8, duration: 0.6}}>
          <SiFirebase className='text-[#FDD04D] bg-[#019BE5]  w-10 h-10 m-1 ml-2 shadow-custom'/>
          </motion.div>
        </div>
        <div className='absolute mt-56  w-full'>
          {
            showJavaScript?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md bg-[#F0DB4F] shadow-custom2'>JavaScript</motion.div>:null
          }
          {
            showReact?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md bg-[#61DBFB] shadow-custom2'>React</motion.div>:null
          }
          {
            showTypeScript?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md bg-[#2D79C7] text-white shadow-custom2'>TypeScript</motion.div>:null
          }
          {
            showHTML?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md text-white bg-[#E54C22] shadow-custom2'>HTML</motion.div>:null
          }
          {
            showCSS?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md text-white bg-[#214CE5] shadow-custom2'>CSS</motion.div>:null
          }
          {
            showNode?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md text-white bg-[#539E43] shadow-custom2'>NodeJS</motion.div>:null
          }
          {
            showVscode?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md bg-[#48B0F4] shadow-custom2'>VS Code</motion.div>:null
          }
          {
            showVite?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md bg-purple-300 shadow-custom2'>Vite</motion.div>:null
          }
          {
            showFirebase?<motion.div initial={{scale:0}} animate={{scale:1}} className='rounded-md text-white bg-[#019BE5] shadow-custom2'>Firebase</motion.div>:null
          }
          
        </div>
      </div>
      
        <div className='flex w-[200px] top-0 -mt-10 absolute'>
          
      <div className=' flex absolute left-0 -top-10 w-[500px] rotate-180'>
      <svg  width="1312" height="481" viewBox="0 0 1312 481" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path  initial={{pathLength:0}} animate={{pathLength: isInView? 1: 0}} transition={{duration:2, delay: 0.5}} d="M0 252.009H799.009M799.009 252.009V58.0001C799.009 29.8335 821.843 7 850.009 7H1253.01C1281.18 7 1304.01 29.8335 1304.01 58V259.5V423C1304.01 451.167 1281.18 474 1253.01 474H850.009C821.843 474 799.009 451.167 799.009 423V252.009Z" stroke="#9E7F7F" strokeWidth="14"/>
</svg>

</div>

<div className=' flex absolute right-0  -top-10 w-[500px]'>
      <svg  width="1312" height="481" viewBox="0 0 1312 481" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path  initial={{pathLength:0}} animate={{pathLength: isInView? 1: 0}} transition={{duration:2, delay: 0.5}} d="M0 252.009H799.009M799.009 252.009V58.0001C799.009 29.8335 821.843 7 850.009 7H1253.01C1281.18 7 1304.01 29.8335 1304.01 58V259.5V423C1304.01 451.167 1281.18 474 1253.01 474H850.009C821.843 474 799.009 451.167 799.009 423V252.009Z" stroke="#9E7F7F" strokeWidth="14"/>
</svg>
</div>
</div>
        <motion.div className='flex flex-col items-center justify-center'>
      <svg className='scale-[0.4]' ref={pathRef} width="1049" height="86" viewBox="0 0 1049 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i_30_5)">
<motion.path 

initial={{ pathLength: 0 }}
animate={{ pathLength: isInView? 1 : 0 }}
transition={{ duration: 3 }}
d="M37.468 0.00799561C27.3133 0.00799561 18.6946 4.06133 11.612 12.168C8.28398 16.0933 5.63864 20.9573 3.67598 26.76C1.71331 32.4773 0.731976 38.3227 0.731976 44.296C0.731976 55.4747 3.29198 65.1173 8.41198 73.224C13.532 81.16 19.8466 85.128 27.356 85.128C29.7453 85.128 32.476 84.5307 35.548 83.336C38.7053 82.056 41.308 80.52 43.356 78.728C43.5266 81.288 43.9533 82.9947 44.636 83.848C45.3186 84.616 46.556 85 48.348 85C50.2253 84.8293 51.5053 84.232 52.188 83.208C53.0413 81.8427 53.468 78.216 53.468 72.328C53.468 67.8907 53.3826 62.6853 53.212 56.712C53.0413 54.3227 52.7853 52.5733 52.444 51.464C52.188 50.2693 51.6333 48.6053 50.78 46.472C50.1826 44.7653 49.3293 43.4853 48.22 42.632C46.94 41.6933 45.404 40.712 43.612 39.688C41.6493 38.4933 37.7666 37.896 31.964 37.896C30.5133 38.152 29.3613 38.92 28.508 40.2C27.6546 41.3947 27.228 42.76 27.228 44.296C27.228 45.6613 28.0386 46.8133 29.66 47.752C31.3666 48.6053 33.2866 49.032 35.42 49.032C38.3213 49.288 40.3266 50.3547 41.436 52.232C42.5453 54.1093 43.0146 56.6693 42.844 59.912C42.844 63.9227 41.4786 67.4213 38.748 70.408C36.1026 73.3093 32.5613 74.76 28.124 74.76C23.6013 74.76 19.676 71.9013 16.348 66.184C13.02 60.3813 11.356 53.7253 11.356 46.216C11.356 35.976 13.788 27.6133 18.652 21.128C23.6866 14.5573 29.8306 11.272 37.084 11.272C39.2173 11.272 41.7346 12.04 44.636 13.576C47.6226 15.112 49.7133 15.88 50.908 15.88C54.1506 15.88 55.772 13.9173 55.772 9.992C55.772 7.43199 53.724 5.12799 49.628 3.07999C45.7026 1.032 41.6493 0.00799561 37.468 0.00799561ZM79.128 85C80.408 85 81.6453 84.5733 82.84 83.72C84.0346 82.7813 84.6746 81.8 84.76 80.776C85.1013 76.3387 85.272 62.472 85.272 39.176C85.272 33.8853 85.2293 30.7707 85.144 29.832C85.0586 28.4667 84.5466 27.4427 83.608 26.76C82.7546 26.1627 81.688 25.864 80.408 25.864C79.128 25.864 78.0613 26.248 77.208 27.016C76.44 27.6987 76.056 28.6373 76.056 29.832L75.544 81.928C75.544 83.976 76.7386 85 79.128 85ZM119.37 81.544C119.797 77.6187 121.247 71.1333 123.722 62.088C128.33 63.2827 134.346 63.88 141.77 63.88L146.25 81.416C146.847 83.8053 148.554 85 151.37 85C152.479 85 153.418 84.6587 154.186 83.976C154.954 83.2933 155.338 82.44 155.338 81.416C153.034 71.432 151.071 63.5813 149.45 57.864C147.743 51.8053 145.482 45.704 142.666 39.56C139.85 33.5013 138.015 29.7893 137.162 28.424C136.138 26.8027 134.943 25.992 133.578 25.992C130.933 25.992 128.287 28.3387 125.642 33.032C122.741 38.0667 120.266 43.9547 118.218 50.696C113.269 66.056 110.794 76.296 110.794 81.416C110.794 83.6347 112.117 84.744 114.762 84.744C117.493 84.744 119.029 83.6773 119.37 81.544ZM133.194 37.768C135.669 42.9733 137.802 48.8187 139.594 55.304C134.474 55.304 130.037 54.792 126.282 53.768C128.074 47.7947 130.378 42.4613 133.194 37.768ZM222.081 36.872C223.361 36.872 224.598 36.36 225.793 35.336C226.988 34.2267 227.585 33.1173 227.585 32.008C227.585 30.6427 226.817 29.6187 225.281 28.936V28.808C220.502 27.1867 215.596 26.376 210.561 26.376C202.113 26.376 195.116 29.0213 189.569 34.312C184.108 39.5173 181.377 46.6853 181.377 55.816C181.377 62.5573 183.041 68.872 186.369 74.76C187.99 77.7467 190.209 80.1787 193.025 82.056C195.841 83.9333 198.7 84.872 201.601 84.872C206.294 84.872 214.017 82.6107 224.769 78.088C226.732 76.808 227.713 75.272 227.713 73.48C227.713 71.3467 226.561 70.28 224.257 70.28C223.916 70.28 220.929 71.2613 215.297 73.224C209.665 75.1867 205.782 76.168 203.649 76.168C201.43 76.168 199.297 75.1013 197.249 72.968C193.068 68.872 190.977 63.3253 190.977 56.328C190.977 42.504 197.889 35.592 211.713 35.592L222.081 36.872ZM279.066 26.504C270.959 26.504 264.602 28.7653 259.994 33.288C255.471 37.8107 253.21 44.424 253.21 53.128C253.21 61.9173 255.471 69.4267 259.994 75.656C264.517 81.8 270.362 84.872 277.53 84.872C284.186 84.872 289.605 81.8 293.786 75.656C298.053 69.4267 300.186 62.1307 300.186 53.768C300.186 45.4053 298.266 38.792 294.426 33.928C290.586 28.9787 285.466 26.504 279.066 26.504ZM278.426 75.528C273.391 75.528 269.381 73.1387 266.394 68.36C263.493 63.6667 262.042 58.504 262.042 52.872C262.042 47.24 263.407 42.9307 266.138 39.944C268.869 36.872 272.709 35.336 277.658 35.336C282.522 35.336 285.935 36.9147 287.898 40.072C289.946 43.144 290.97 48.1787 290.97 55.176C290.97 62.088 289.263 67.6347 285.85 71.816C283.802 74.2907 281.327 75.528 278.426 75.528ZM373.939 22.92C372.744 22.92 371.592 23.304 370.483 24.072C369.459 24.7547 368.776 25.5227 368.435 26.376C368.264 26.632 367.795 27.8693 367.027 30.088L366.003 33.416C362.675 42.7173 356.702 47.368 348.083 47.368C345.096 47.368 342.408 45.6613 340.019 42.248C337.63 38.7493 336.392 34.8667 336.307 30.6C336.222 29.576 335.71 28.7653 334.771 28.168C333.832 27.5707 332.68 27.272 331.315 27.272C330.12 27.272 329.054 27.8267 328.115 28.936C327.176 29.96 326.707 31.112 326.707 32.392V57.608L326.323 81.288C326.323 83.7627 327.475 85 329.779 85C333.704 85 335.71 83.208 335.795 79.624C335.966 76.04 336.051 67.08 336.051 52.744C338.696 55.3893 342.494 56.712 347.443 56.712C352.307 56.712 356.19 55.944 359.091 54.408C362.078 52.872 365.15 50.184 368.307 46.344C368.307 52.9147 368.35 57.6933 368.435 60.68C368.606 66.4827 368.691 73.1813 368.691 80.776C368.691 83.592 369.758 85 371.891 85C374.11 85 375.646 84.4453 376.499 83.336C377.523 82.1413 378.035 80.904 378.035 79.624C378.035 59.4 377.907 41.6933 377.651 26.504C377.651 24.1147 376.414 22.92 373.939 22.92ZM427.631 26.504C419.524 26.504 413.167 28.7653 408.559 33.288C404.036 37.8107 401.775 44.424 401.775 53.128C401.775 61.9173 404.036 69.4267 408.559 75.656C413.082 81.8 418.927 84.872 426.095 84.872C432.751 84.872 438.17 81.8 442.351 75.656C446.618 69.4267 448.751 62.1307 448.751 53.768C448.751 45.4053 446.831 38.792 442.991 33.928C439.151 28.9787 434.031 26.504 427.631 26.504ZM426.991 75.528C421.956 75.528 417.946 73.1387 414.959 68.36C412.058 63.6667 410.607 58.504 410.607 52.872C410.607 47.24 411.972 42.9307 414.703 39.944C417.434 36.872 421.274 35.336 426.223 35.336C431.087 35.336 434.5 36.9147 436.463 40.072C438.511 43.144 439.535 48.1787 439.535 55.176C439.535 62.088 437.828 67.6347 434.415 71.816C432.367 74.2907 429.892 75.528 426.991 75.528ZM521.156 71.944C521.156 73.9067 521.199 75.3147 521.284 76.168C521.455 77.0213 521.583 77.96 521.668 78.984C521.753 79.9227 521.881 80.648 522.052 81.16C522.223 81.3307 522.393 81.7573 522.564 82.44C522.735 83.1227 523.119 83.6773 523.716 84.104C524.399 84.5307 525.551 84.8293 527.172 85C530.073 85 531.567 82.7813 531.652 78.344C531.737 75.6987 531.567 65.8427 531.14 48.776V46.088C536.004 46.9413 540.143 47.368 543.556 47.368C550.98 47.368 556.527 45.9173 560.196 43.016C562.671 41.1387 564.633 38.3227 566.084 34.568C567.535 30.728 568.26 26.1627 568.26 20.872C568.26 14.216 565.487 9.13866 559.94 5.64C554.393 2.14133 547.652 0.391998 539.716 0.391998C533.828 0.391998 529.305 0.903997 526.148 1.92799C523.076 2.86666 521.327 4.616 520.9 7.17599C520.473 12.1253 520.26 21.8533 520.26 36.36C520.26 51.8053 520.559 63.6667 521.156 71.944ZM531.012 11.144C532.633 10.376 535.62 9.992 539.972 9.992C544.239 9.992 548.249 11.016 552.004 13.064C555.759 15.0267 557.636 17.7573 557.636 21.256C557.636 24.7547 557.081 27.9973 555.972 30.984C555.375 32.4347 553.796 34.0987 551.236 35.976C550.639 36.488 549.487 36.872 547.78 37.128C545.732 37.384 543.599 37.512 541.38 37.512C539.844 37.512 537.967 37.384 535.748 37.128L531.012 36.488C530.671 31.88 530.5 28.0827 530.5 25.096C530.5 22.4507 530.671 17.8 531.012 11.144ZM618.493 56.328C620.37 56.328 621.778 56.328 622.717 56.328C623.656 56.2427 624.338 56.2 624.765 56.2C625.789 56.0293 626.728 55.4747 627.581 54.536C628.434 53.5973 628.861 52.616 628.861 51.592C628.861 49.544 627.538 48.3493 624.893 48.008C614.056 48.008 607.528 47.9653 605.309 47.88C605.224 47.2827 605.181 42.9733 605.181 34.952C608.424 35.208 611.581 35.336 614.653 35.336C623.101 35.336 628.434 34.7387 630.653 33.544C631.677 32.8613 632.189 31.7093 632.189 30.088C632.189 27.9547 630.824 26.6747 628.093 26.248H627.965L605.565 25.864H601.981C598.141 25.9493 596.221 27.5707 596.221 30.728C596.221 36.1893 596.349 42.248 596.605 48.904C595.666 49.8427 595.197 50.8667 595.197 51.976C595.197 53.256 595.752 54.1947 596.861 54.792V76.04C596.861 78.7707 597.117 80.9467 597.629 82.568C598.141 84.1893 599.464 85 601.597 85L626.685 84.744C630.013 84.744 631.677 82.952 631.677 79.368C631.677 77.4907 630.44 76.424 627.965 76.168L605.821 76.552C605.906 76.4667 605.949 75.272 605.949 72.968L605.693 56.2L618.493 56.328ZM697.966 33.928C697.966 31.4533 696.387 29.4907 693.23 28.04C690.073 26.504 685.593 25.736 679.79 25.736C673.817 25.736 668.825 27.1867 664.814 30.088C660.718 32.904 658.67 36.3173 658.67 40.328C658.67 44.2533 659.779 47.3253 661.998 49.544C664.046 51.592 666.691 53.0853 669.934 54.024L674.67 55.176C678.254 55.944 681.07 56.712 683.118 57.48C685.251 58.1627 687.043 59.1867 688.494 60.552C689.945 61.9173 690.67 63.752 690.67 66.056C690.67 68.9573 689.646 71.304 687.598 73.096C685.635 74.888 682.862 75.784 679.278 75.784C677.145 75.784 672.11 74.2053 664.174 71.048C663.662 70.8773 663.278 70.792 663.022 70.792C661.913 70.792 660.931 71.304 660.078 72.328C659.225 73.2667 658.798 74.3333 658.798 75.528C658.798 78.1733 660.803 80.392 664.814 82.184C668.825 83.976 673.603 84.872 679.15 84.872C684.782 84.872 689.603 83.3787 693.614 80.392C697.71 77.32 699.758 72.6693 699.758 66.44C699.758 63.7947 699.417 61.5333 698.734 59.656C698.137 57.6933 697.454 56.3707 696.686 55.688C695.833 54.8347 694.766 53.9813 693.486 53.128C692.206 52.104 689.262 50.9947 684.654 49.8C679.961 48.6053 676.121 47.2827 673.134 45.832C669.891 44.296 668.27 42.5467 668.27 40.584C668.27 38.6213 669.593 37 672.238 35.72C674.883 34.3547 677.443 33.672 679.918 33.672C682.563 33.672 685.294 34.3547 688.11 35.72C691.097 37.0853 693.273 37.768 694.638 37.768C695.406 37.768 696.131 37.4267 696.814 36.744C697.582 35.976 697.966 35.0373 697.966 33.928ZM763.936 33.928C763.936 31.4533 762.357 29.4907 759.2 28.04C756.043 26.504 751.563 25.736 745.76 25.736C739.787 25.736 734.795 27.1867 730.784 30.088C726.688 32.904 724.64 36.3173 724.64 40.328C724.64 44.2533 725.749 47.3253 727.968 49.544C730.016 51.592 732.661 53.0853 735.904 54.024L740.64 55.176C744.224 55.944 747.04 56.712 749.088 57.48C751.221 58.1627 753.013 59.1867 754.464 60.552C755.915 61.9173 756.64 63.752 756.64 66.056C756.64 68.9573 755.616 71.304 753.568 73.096C751.605 74.888 748.832 75.784 745.248 75.784C743.115 75.784 738.08 74.2053 730.144 71.048C729.632 70.8773 729.248 70.792 728.992 70.792C727.883 70.792 726.901 71.304 726.048 72.328C725.195 73.2667 724.768 74.3333 724.768 75.528C724.768 78.1733 726.773 80.392 730.784 82.184C734.795 83.976 739.573 84.872 745.12 84.872C750.752 84.872 755.573 83.3787 759.584 80.392C763.68 77.32 765.728 72.6693 765.728 66.44C765.728 63.7947 765.387 61.5333 764.704 59.656C764.107 57.6933 763.424 56.3707 762.656 55.688C761.803 54.8347 760.736 53.9813 759.456 53.128C758.176 52.104 755.232 50.9947 750.624 49.8C745.931 48.6053 742.091 47.2827 739.104 45.832C735.861 44.296 734.24 42.5467 734.24 40.584C734.24 38.6213 735.563 37 738.208 35.72C740.853 34.3547 743.413 33.672 745.888 33.672C748.533 33.672 751.264 34.3547 754.08 35.72C757.067 37.0853 759.243 37.768 760.608 37.768C761.376 37.768 762.101 37.4267 762.784 36.744C763.552 35.976 763.936 35.0373 763.936 33.928ZM815.826 26.504C807.719 26.504 801.362 28.7653 796.754 33.288C792.231 37.8107 789.97 44.424 789.97 53.128C789.97 61.9173 792.231 69.4267 796.754 75.656C801.277 81.8 807.122 84.872 814.29 84.872C820.946 84.872 826.365 81.8 830.546 75.656C834.813 69.4267 836.946 62.1307 836.946 53.768C836.946 45.4053 835.026 38.792 831.186 33.928C827.346 28.9787 822.226 26.504 815.826 26.504ZM815.186 75.528C810.151 75.528 806.141 73.1387 803.154 68.36C800.253 63.6667 798.802 58.504 798.802 52.872C798.802 47.24 800.167 42.9307 802.898 39.944C805.629 36.872 809.469 35.336 814.418 35.336C819.282 35.336 822.695 36.9147 824.658 40.072C826.706 43.144 827.73 48.1787 827.73 55.176C827.73 62.088 826.023 67.6347 822.61 71.816C820.562 74.2907 818.087 75.528 815.186 75.528ZM897.003 33.928C905.024 33.928 909.035 32.1787 909.035 28.68C909.035 26.9733 907.883 25.864 905.579 25.352L865.643 26.632C864.448 26.7173 863.339 27.272 862.315 28.296C861.376 29.32 860.907 30.344 860.907 31.368C860.907 33.5867 862.23 34.696 864.875 34.696C869.568 34.696 874.774 34.4827 880.491 34.056C879.979 39.944 879.723 47.5813 879.723 56.968C879.723 64.8187 879.851 72.968 880.107 81.416C880.107 83.8053 881.216 85 883.435 85C884.715 85 885.867 84.616 886.891 83.848C888 82.9947 888.555 81.9707 888.555 80.776C888.555 77.704 888.512 75.3147 888.427 73.608L888.299 64.008L888.555 33.672L897.003 33.928ZM966.723 33.928C974.744 33.928 978.755 32.1787 978.755 28.68C978.755 26.9733 977.603 25.864 975.299 25.352L935.363 26.632C934.168 26.7173 933.059 27.272 932.035 28.296C931.096 29.32 930.627 30.344 930.627 31.368C930.627 33.5867 931.95 34.696 934.595 34.696C939.288 34.696 944.494 34.4827 950.211 34.056C949.699 39.944 949.443 47.5813 949.443 56.968C949.443 64.8187 949.571 72.968 949.827 81.416C949.827 83.8053 950.936 85 953.155 85C954.435 85 955.587 84.616 956.611 83.848C957.72 82.9947 958.275 81.9707 958.275 80.776C958.275 77.704 958.232 75.3147 958.147 73.608L958.019 64.008L958.275 33.672L966.723 33.928ZM1027.61 26.504C1019.5 26.504 1013.15 28.7653 1008.54 33.288C1004.02 37.8107 1001.75 44.424 1001.75 53.128C1001.75 61.9173 1004.02 69.4267 1008.54 75.656C1013.06 81.8 1018.91 84.872 1026.07 84.872C1032.73 84.872 1038.15 81.8 1042.33 75.656C1046.6 69.4267 1048.73 62.1307 1048.73 53.768C1048.73 45.4053 1046.81 38.792 1042.97 33.928C1039.13 28.9787 1034.01 26.504 1027.61 26.504ZM1026.97 75.528C1021.94 75.528 1017.93 73.1387 1014.94 68.36C1012.04 63.6667 1010.59 58.504 1010.59 52.872C1010.59 47.24 1011.95 42.9307 1014.68 39.944C1017.41 36.872 1021.25 35.336 1026.2 35.336C1031.07 35.336 1034.48 36.9147 1036.44 40.072C1038.49 43.144 1039.51 48.1787 1039.51 55.176C1039.51 62.088 1037.81 67.6347 1034.39 71.816C1032.35 74.2907 1029.87 75.528 1026.97 75.528Z" 
 
strokeWidth="2"
          stroke="#A67A7A"
          
        
        strokeLinecap="round"
        strokeLinejoin="round"/>
</g>
<defs>
<filter id="filter0_i_30_5" x="0.731995" y="0.00805664" width="1048" height="89.12" filterUnits="userSpaceOnUse" 
colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_30_5"/>
</filter>
</defs>
</svg>
<motion.img initial={{opacity:0}} 
animate={{opacity: isInView? 1 : 0}}
transition={{duration: 2}} className='scale-[0.4] absolute mt-20' src={job}/>
</motion.div>


      </div>
      
    </div>
  )
}

export default About 
