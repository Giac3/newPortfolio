import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Card from '../components/Card';
import Carousel2 from '../components/Carousel2';
import voicegpt from '../assets/voicegpt.png'
import spark from '../assets/spark.png'
import codek from '../assets/codek.png'
import quizzle from '../assets/quizzle.png'
import { motion } from 'framer-motion';

import { AiFillHome} from 'react-icons/ai'
import { GrContactInfo, GrContact} from 'react-icons/gr'
import { MdOutlineWork} from 'react-icons/md'
import home2 from '../assets/home2.svg'
import about2 from '../assets/about2.svg'
import work2 from '../assets/work2.svg'
import contact2 from '../assets/contact2.svg'
import gptmail from '../assets/gptmail.png'
import research from '../assets/research.png'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import Hanger from '../components/hanger';

const voicgptInfo = {
  image: voicegpt,
  title: "VoiceGPT Web Bot",
  description: "An online chat bot that allows users to communicate with the text-davinci-003 model from OpenAI using the web speech API for voice recognition and AWS Polly neural engine for speech Synthesis. VoiceGPT allows users to ask questions on any general knowledge topic.",
  link: "https://www.alphaindigo.tech/",
  gitLink: "https://github.com/Giac3/Einstein",
  tech: {
    javascript: true,
    react: false,
    node: true,
    html: true,
    css: true,
    python: false,
    php: false,
    aws: true,
    laravel: false,
    angular: false,
    vue: false,
    git: true,
    docker: false,
    java: false,
    figma: true,
    linux: false,
    rust: false,
    apple: false,
    windows: false,
    typescript: false,
    svelte:false,
    firebase: false,
    mongodb: false,
    mysql: false,
  }
}
const sparkInfo = {
  image: spark,
  title: "SparkUp Tech Jobs",
  description: "SparkUp.uk is a full stack web application that allows startups and tech workers to find each other by showcasing and filtering through different technology skills. The application provides a full SaaS product that allows startups and job hunters to manage applications, profiles and message candidates all within the application.",
  link: "https://sparkup.uk/",
  gitLink: "https://github.com/Giac3/Spark",
  tech: {
    javascript: false,
    react: true,
    node: false,
    html: false,
    css: false,
    python: false,
    php: false,
    aws: false,
    laravel: false,
    angular: false,
    vue: false,
    git: true,
    docker: false,
    java: false,
    figma: true,
    linux: false,
    rust: false,
    apple: false,
    windows: false,
    typescript: true,
    svelte:false,
    firebase: true,
    mongodb: false,
    mysql: false,
    tailwind: true
  }

}
const gptmailInfo = {
  image: gptmail,
  title: "GPTmail",
  description: "GPTmail is a google chrome extension available on the chrome webstore which uses the text-davinci-003 model. GPTmail can be used to generate automatic replies to emails by simply pasting recieved emails into the extension and then letting the model auto generate a reply. ",
  link: "https://chrome.google.com/webstore/detail/mailgpt/elnhmnfhfkglbgimgcclpkjmoboanpop?hl=en-GB",
  gitLink: "https://github.com/Giac3/GPTmail",
  tech: {
    javascript: true,
    react: false,
    node: true,
    html: true,
    css: true,
    python: false,
    php: false,
    aws: false,
    laravel: false,
    angular: false,
    vue: false,
    git: true,
    docker: false,
    java: false,
    figma: false,
    linux: false,
    rust: false,
    apple: true,
    windows: false,
    typescript: false,
    svelte:false,
    firebase: false,
    mongodb: false,
    mysql: false,
  }

}
const codekInfo = {
  image: codek,
  title: "CoDek Tools",
  description: "CoDek is a suite of online AI tools to assist programmers in their development. CoDek provides a code translation, improvement and brainstorm suite which aids users with more efficient development. CoDek uses the codex model from OpenAI to process user requests and provide accurate and useful repsonses.",
  link: "https://agile-springs-73850.herokuapp.com/",
  gitLink: "https://github.com/Giac3/Codek",
  tech: {
    javascript: true,
    react: false,
    node: true,
    html: true,
    css: true,
    python: false,
    php: false,
    aws: false,
    laravel: false,
    angular: false,
    vue: false,
    git: true,
    docker: false,
    java: false,
    figma: true,
    linux: false,
    rust: false,
    apple: true,
    windows: false,
    typescript: false,
    svelte:false,
    firebase: false,
    mongodb: false,
    mysql: false,
  }

}
const researchInfo = {
  image: research,
  title: "Machine Learning Research",
  description: "This was a group Machine Learning research project I completed in my final year of University. In this project we researched the evolution of Machine Learning across different scientific disciplines. In this project I was in charge of conducting a thorough time series of millions of research publications.",
  link: "https://firebasestorage.googleapis.com/v0/b/spark-development-f6009.appspot.com/o/files%2FML_Research_Paper.pdf?alt=media&token=ac94a226-05e8-40f7-b719-aab1633b3943",
  gitLink: "https://firebasestorage.googleapis.com/v0/b/spark-development-f6009.appspot.com/o/files%2FML_Research_Paper.pdf?alt=media&token=ac94a226-05e8-40f7-b719-aab1633b3943",
  tech: {
    python: true,
    tensorflow: true,
    keras: true,
    numpy: true,
    pandas: true,
  }

}

const quizzleInfo = {
  image: quizzle,
  title: "Quizzle",
  description: "Quizzle is a full stack web application quiz game. The game works by connecting everyone to the same timed stream of questions where the question changes every 30 seconds. Everyone gets the same question and they gain/lose points depending on the question difficulty. Scores are stored in a database for all users. ",
  link: "https://quizzle.it/",
  gitLink: "https://github.com/Giac3/Quizzle",
  tech: {
    javascript: false,
    react: true,
    node: true,
    html: false,
    css:  false,
    python: false,
    php: false,
    aws: false,
    laravel: false,
    angular: false,
    vue: false,
    git: true,
    docker: false,
    java: false,
    figma: false,
    linux: false,
    rust: false,
    apple: false,
    windows: false,
    typescript: true,
    svelte:false,
    firebase: true,
    mongodb: false,
    mysql: false,
    tailwind: true,
  }

}

function useOnScreen(ref: RefObject<Element>) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}

const Work = ({aboutRef, homeRef, workRef, contactRef}:any) => {

  return (
    <div ref={workRef} className='w-screen bg-blue-200 justify-center flex-col  h-[100%] flex items-center'>
      
      <div className='w-screen h-screen bg-black'>
      <div className='bg-purple-300 grid absolute grid-cols-2 grid-rows-2 p-1 z-20 m-1 rounded-md w-[110px] aspect-square'>
        <motion.button onClick={() => {homeRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{scale:1.1}} className='w-10 group h-10 m-1 flex items-center justify-center bg-rose-50 rounded-full shadow-custom'> <AiFillHome className='scale-[1.3] duration-100 '/> </motion.button>
        <motion.button onClick={() => {aboutRef.current.scrollIntoView({behavior: "smooth"})}}  whileHover={{scale:1.1}} className='w-10 cursor-default  group h-10 m-1 flex items-center justify-center bg-green-50 rounded-full shadow-custom'> <GrContactInfo className='scale-[1.3] duration-100 '/> 
        </motion.button>
        <motion.button  whileHover={{scale:1.1}} className='w-10 group h-10 m-1 flex items-center justify-center bg-blue-50 rounded-full shadow-custom'> 
        <MdOutlineWork className='scale-[1.3]  duration-100 '/> </motion.button>
        <motion.button onClick={() => {contactRef.current.scrollIntoView({behavior: "smooth"})}} whileHover={{scale:1.1}} className='w-10 border-2 group h-10 m-1 flex items-center justify-center bg-purple-50 rounded-full shadow-custom'> 
        <GrContact className='scale-[1.3] duration-100 '/> </motion.button>
        </div>
      <Canvas dpr={[1, 2]} shadows={{ autoUpdate: true }} camera={{ fov: 45, position: [100, 15, 20] }}>
            <ambientLight intensity={1} />
            <Stars/>
            <directionalLight position={[0,3,24]} intensity={4}/>
            <Environment preset="night"/>
            <OrbitControls />
            <Hanger/>
          </Canvas>
      </div>
    </div>
  )
}

export default Work
