import React, { useRef, useState } from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

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


const Contact = ({aboutRef, homeRef, workRef, contactRef}:any) => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const messageRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>

  const [messageSent, setMessageSent] = useState(false)
  const [messageFailed, setMessageFailed] = useState(false)
  const [nameEmpty, setNameEmpty] = useState(false)
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [messageEmpty, setMessageEmpty] = useState(false)

  const sendEmail = (e:any) => {
    e.preventDefault();

    if (nameRef.current.value === "" || emailRef.current.value === "" || messageRef.current.value === "") {
      if (nameRef.current.value === "") {

        setNameEmpty(true) 
        setTimeout(() => {
          setNameEmpty(false)
        }, 1000);

      }
      if (emailRef.current.value === "") {

        setEmailEmpty(true) 
        setTimeout(() => {
          setEmailEmpty(false)
        }, 1000);

      }
      if (messageRef.current.value === "") {

        setMessageEmpty(true) 
        setTimeout(() => {
          setMessageEmpty(false)
        }, 1000);

      }
    } else {

      emailjs.sendForm('service_8t9rl1q', 'template_hfxgia9', formRef.current, 'ISQQMd0fgEDubyqQz')
      .then((result) => {
        setMessageSent(true)
      }, (error) => {
        setMessageFailed(true)
          setTimeout(() => {
            setMessageFailed(false)
          }, 1000);
      });
    }

    
  };

  return (
    <div ref={contactRef} className='w-screen  bg-purple-200 h-[100%]  flex items-center'>
      
      <div className='w-screen h-screen flex flex-col gap-10 items-center justify-center'>
      <div className='flex items-center'>
        <motion.button onClick={() => {homeRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-rose-50 rounded-full shadow-custom'> <AiFillHome className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.4] ml-5 mt-1' src={home2}/> </motion.button>
        <motion.button onClick={() => {aboutRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-green-50 rounded-full shadow-custom'> <GrContactInfo className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> 
        <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.37] ml-5 mt-1' src={about2}/> </motion.button>
        <motion.button onClick={() => {workRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{width:100}} className='w-10 group h-10 m-2 flex items-center justify-center bg-blue-50 rounded-full shadow-custom'> 
        <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.4] ml-5 mt-1' src={work2}/> 
        <MdOutlineWork className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> </motion.button>
        <motion.button whileHover={{width:100}} className='w-10 border-2 border-purple-300 group h-10 m-2 flex items-center justify-center bg-purple-50 rounded-full shadow-custom'> 
        <img className='opacity-0 absolute group-hover:opacity-100 duration-[0.05] scale-[0.32] ml-7 mt-1' src={contact2}/>
        <GrContact className='scale-[1.3] group-hover:-translate-x-8 duration-100 '/> </motion.button>
      </div>
      <motion.div  className='bg-rose-50 flex-col w-[300px] h-[410px] shadow-custom2 justify-center rounded-xl gap-4 flex items-center'>
        {
          messageSent? <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{duration: 0.3, delay: 0.5}} className=' w-40 h-10 absolute shadow-custom2 bg-green-200 flex items-center justify-center font-display p-2 rounded-lg'>Message Sent</motion.div>:null
        }
        {
          messageFailed? <motion.div initial={{scale:0}} animate={{scale: 1}} transition={{duration: 0.3, delay: 0.5}} className=' w-40 h-10 absolute shadow-custom2 bg-red-300 flex items-center justify-center font-display p-2 rounded-lg'>Message not sent</motion.div>:null
        }
        <motion.div initial={{opacity: 1}} animate={{opacity: messageSent? 0 : 1}} transition={{duration: 0.5}} className='flex flex-col items-center justify-center'>
        <h1 className=' font-display p-2 text-xl'>Send Me a Message</h1>
        <form className='flex flex-col items-center justify-center gap-4' ref={formRef} onSubmit={sendEmail}>
      
      {
        nameEmpty?<input type="text" ref={nameRef} className=' w-[200px] border-[1px] border-red-200 rounded-md h-[40px] outline-none font-display shadow-custom text-gray-600 p-1' placeholder='Name' name="user_name" />:<input type="text" ref={nameRef} className=' w-[200px] rounded-md h-[40px] outline-none font-display shadow-custom text-gray-600 p-1' placeholder='Name' name="user_name" />
      }
      
      
      {
        emailEmpty? <input type="email" ref={emailRef} className=' w-[200px] rounded-md border-[1px] border-red-200 h-[40px] outline-none font-display shadow-custom text-gray-600 p-1' placeholder='Email' name="user_email" />: <input type="email" ref={emailRef} className=' w-[200px] rounded-md h-[40px] outline-none font-display shadow-custom text-gray-600 p-1' placeholder='Email' name="user_email" />
      }
      
      {
        messageEmpty? <textarea placeholder='Hey...' ref={messageRef} className=' p-2 border-[1px] border-red-200 font-display w-[250px] resize-none rounded-md h-40 top-10 outline-none shadow-custom' name="message" />: <textarea placeholder='Hey...' ref={messageRef} className=' p-2 font-display w-[250px] resize-none rounded-md h-40 top-10 outline-none shadow-custom' name="message" />
      }
      
      

      
      <input className='bg-green-200 font-display rounded-md p-2 shadow-custom2 text-xl cursor-pointer duration-300 hover:bg-yellow-200' type="submit" value="Send" />
    </form>
    </motion.div>
      </motion.div>
      <div className='flex flex-row gap-10'>
        
        <a href="https://www.linkedin.com/in/giacomo-pessotto-476513187/"  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-10 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-10 flex items-center justify-center'>
        <SiLinkedin className='scale-150 text-blue-400'/>
        </a>
        <a href="https://twitter.com/_SparkUp_"  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-10 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-10 flex items-center justify-center'>

        <SiTwitter className='scale-150 text-blue-300'/>
        </a>
        <a href="https://github.com/Giac3"  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-10 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-10 flex items-center justify-center'>
        <SiGithub className='scale-150 text-gray-600'/>
        </a>
      </div>
      </div>
    </div>
  )
}

export default Contact
