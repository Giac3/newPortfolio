import React, { useState } from 'react'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { SiGithub, SiTwitter } from 'react-icons/si'  

  let work = [
    {
        i:0,
        title: "SparkUp",
        link: "https://sparkup.uk/",
        gitLink: "https://github.com/Giac3/Spark",
      
      },
      {
        i:1,
        title: "VoiceGPT",
        link: "https://www.alphaindigo.tech/",
        gitLink: "https://github.com/Giac3/Einstein",
      },
      {
        i:2,
        title: "SnugDB",
        link: null,
        gitLink: "https://github.com/Giac3/snugdb",
      },
      {
        i:3,
        title: "Kindling TravelPod",
        link: "https://www.kindlingtrips.com/",
        gitLink: null,
      },
      {
        i:4,
        title: "VeloCache",
        link: null,
        gitLink: "https://github.com/Giac3/velo-cache",
      },
    {
        i:5,
        title: "GPTmail",
        link: null,
        gitLink: "https://github.com/Giac3/GPTmail",
      
      },

    {
        i:6,
        title: "CoDek Tools",
        link: "https://agile-springs-73850.herokuapp.com/",
        gitLink: "https://github.com/Giac3/Codek",
      },
    {
        i:7,
        title: "Quizzle",
        link: "https://quizzle.it/",
        gitLink: "https://github.com/Giac3/Quizzle",
      },
      {
        i:8,
        title: "Machine Learning Research",
        link: "https://firebasestorage.googleapis.com/v0/b/spark-development-f6009.appspot.com/o/files%2FML_Research_Paper.pdf?alt=media&token=ac94a226-05e8-40f7-b719-aab1633b3943",
        gitLink: "https://firebasestorage.googleapis.com/v0/b/spark-development-f6009.appspot.com/o/files%2FML_Research_Paper.pdf?alt=media&token=ac94a226-05e8-40f7-b719-aab1633b3943",
      }
  ]

const Works = () => {

    const [currentWork, setCurrentWork] = useState(work[0])

    const handleForward = () => {
        if (currentWork.i === work.length-1) {
            setCurrentWork(work[0])
        } else {
            setCurrentWork(work[currentWork.i+1])
        }
    }

    const handleBackward = () => {
        if (currentWork.i === 0) {
            setCurrentWork(work[work.length-1])
        } else {
            setCurrentWork(work[currentWork.i-1])
        }
    }

  return (
    <div className='bg-blue-200 flex items-center gap-1 flex-col h-full p-2'>
        <div className='flex w-full justify-between'>
            <button onClick={handleBackward} className='bg-gray-400 p-2 flex items-center justify-center rounded-md w-20 shadow-md'><AiOutlineArrowLeft className='w-10 h-10'/></button>
            <div className='flex items-center gap-3'>
        <h1 className='text-6xl'>{currentWork.title}</h1>
        {
            currentWork.link ? <a href={currentWork.link}  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-14 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-14 flex items-center justify-center'>

            <CgWebsite className='w-12 h-12 text-black'/>
            </a> : null
        }
        {
            currentWork.gitLink ? <a href={currentWork.gitLink}  rel="noopener noreferrer" target="_blank" className='cursor-pointer w-14 hover:shadow-custom2 duration-300 rounded-md shadow-custom h-14 flex items-center justify-center'>
            <SiGithub className='w-12 h-12 text-gray-600'/>
            </a>: null
        }
        </div>
        <button onClick={handleForward} className='bg-gray-400 p-2 flex items-center justify-center rounded-md w-20 shadow-md'><AiOutlineArrowRight className='w-10 h-10'/></button>
        </div>
        <div className='w-full shadow-md h-full p-1 rounded-md'>
            {
                currentWork.link ? <iframe className='w-full h-full' src={currentWork.link}/>: <div className='w-full h-full flex items-center justify-center text-5xl'>No website but check out the github</div>
            }
      </div>
    </div>
  )
}

export default Works
