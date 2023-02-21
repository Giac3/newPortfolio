import { faAngular, faApple, faAws, faCss3, faDocker, faFigma, faGitAlt, faHtml5, faJava, faLaravel, faLinux, faNodeJs, faPhoenixFramework, faPhp, faPython, faReact, faRust, faSquareJs, faVuejs, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faMinus, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { DiNpm } from 'react-icons/di'
import { SiCplusplus, SiCsharp, SiDjango, SiDotnet, SiExpress, SiFlask, SiFlutter, SiGo, SiGraphql, SiJquery, SiKeras, SiKotlin, SiNextdotjs, SiNumpy, SiNuxtdotjs, SiPandas, SiPytorch, SiRedux, SiRuby, SiRubyonrails, SiSupabase, SiSwift, SiTensorflow, SiVercel } from 'react-icons/si'



const Technologies = ({boolLocation}:any) => {
  return (
    <>
      {
    boolLocation.javascript? <div  className=' bg-yellow-200 ml-1 p-1 flex h-8 rounded-md m-1 shadow-custom cursor-pointer  '> JavaScript <FontAwesomeIcon  icon={faSquareJs} /></div> :null
  }
  {
    boolLocation.react? <div  className=' bg-blue-200 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom '> React <FontAwesomeIcon  icon={faReact} /></div>: null
  }
  {
   boolLocation.node? <div  className=' bg-green-200 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom  '> Node <FontAwesomeIcon  icon={faNodeJs} /></div> : null
  }
  {
    boolLocation.html?<div  className=' bg-orange-300 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom  '> HTML <FontAwesomeIcon  icon={faHtml5} /></div> : null
  }
  {
    boolLocation.css? <div  className=' bg-blue-300 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom  '> CSS <FontAwesomeIcon  icon={faCss3} /></div>: null
  }
  {
   boolLocation.python?<div  className=' bg-gradient-to-r from-blue-400 to-yellow-300 m-1 p-1 flex h-8 rounded-md cursor-pointer  shadow-custom '> Python <FontAwesomeIcon  icon={faPython} /></div>: null
  }
  {
   boolLocation.php?<div  className=' bg-purple-200 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom '> PHP <FontAwesomeIcon  icon={faPhp} /></div>: null
  }
  {
    boolLocation.aws?<div  className=' bg-gradient-to-r from-gray-500 to-orange-400 m-1 p-1 flex h-8 rounded-md cursor-pointer  shadow-custom '> AWS <FontAwesomeIcon  icon={faAws} /></div>: null
  }
  {
    boolLocation.laravel?<div className=' bg-red-400 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom '> Laravel <FontAwesomeIcon  icon={faLaravel} /></div>: null
  }
  {
    boolLocation.angular?<div className=' bg-red-500 m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom  '> Angular <FontAwesomeIcon  icon={faAngular} /></div>: null
  }
  {
    boolLocation.vue?<div  className=' bg-gradient-to-r from-slate-500 to-green-400 m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom  border-green-500 '> Vue <FontAwesomeIcon  icon={faVuejs} /></div>: null
  }
  {
    boolLocation.git?<div  className=' bg-orange-500 m-1 p-1 flex h-8 rounded-md cursor-pointer  shadow-custom '> Git <FontAwesomeIcon  icon={faGitAlt} /></div>: null
  }
  {
    boolLocation.docker?<div  className=' bg-blue-400 m-1 p-1 inline-block rounded-md cursor-pointer   shadow-custom '> Docker <FontAwesomeIcon className=' text-white'  icon={faDocker} /></div>: null
  }
  {
    boolLocation.java?<div className=' bg-gradient-to-r from-blue-400 to-red-400 m-1 p-1 inline-block rounded-md shadow-custom   '> Java <FontAwesomeIcon className=' text-white'  icon={faJava} /></div>:null
}
{
    boolLocation.figma?<div className=' bg-gradient-to-r from-red-300 via-purple-500 to-green-400 m-1 p-1 flex h-8 rounded-md shadow-custom  '> Figma <FontAwesomeIcon className=' text-white'  icon={faFigma} /></div>:null
}
{
    boolLocation.linux?<div className=' bg-gradient-to-r from-white via-yellow-400 to-black m-1 p-1 inline-block rounded-md shadow-custom  '> Linux <FontAwesomeIcon className=' text-white'  icon={faLinux} /></div>:null
}
{
    boolLocation.rust?<div  className=' bg-gradient-to-r from-white  to-orange-400 m-1 p-1 inline-block shadow-custom rounded-md cursor-pointer '> Rust <FontAwesomeIcon className=' text-black'  icon={faRust} /></div>:null
}
{
    boolLocation.apple?<div className=' bg-gradient-to-r from-white  to-black m-1 p-1 flex h-8 rounded-md cursor-pointer shadow-custom '> macOS <FontAwesomeIcon className=' text-white'  icon={faApple} /></div>:null
}
{
    boolLocation.windows?<div className=' bg-gradient-to-r from-blue-400  to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Windows <FontAwesomeIcon className=' text-blue-400'  icon={faWindows} /></div>:null
}
{
    boolLocation.typescript?<div className='  bg-white m-1 p-1 flex h-8  rounded-md cursor-pointer shadow-custom '>TypeScript <i className="lni lni-typescript text-blue-500"></i></div>:null
}
{
    boolLocation.svelte?<div  className=' bg-gradient-to-r from-orange-600 to-white m-1 p-1 inline-block shadow-custom rounded-md cursor-pointer '>Svelte <i className="lni text-orange-600 lni-svelte"></i></div>:null
}
{
    boolLocation.firebase?<div  className=' bg-gradient-to-r from-orange-300 flex h-8 to-blue-400 m-1 p-1 rounded-md cursor-pointer '>Firebase <i className="lni text-orange-300 lni-firebase"></i></div>:null
}
{
    boolLocation.mongodb?<div className=' bg-gradient-to-r from-green-700 to-white m-1 p-1 inline-block rounded-md cursor-pointer '>MongoDB <i className="lni text-green-700 lni-mongodb"></i></div>:null
}
{
    boolLocation.mysql?<div className=' bg-gradient-to-r from-blue-400 to-orange-400 m-1 p-1 inline-block rounded-md cursor-pointer '>MySQL <i className="lni text-blue-400 lni-mysql"></i></div>:null
}
{
    boolLocation.postgresql?<div className=' bg-gradient-to-r from-blue-500 to-white m-1 p-1 inline-block rounded-md cursor-pointer '>PostgreSQL <i className="lni text-blue-500 lni-postgresql"></i></div>:null
}
{
    boolLocation.tailwind?<div  className=' bg-gradient-to-r from-blue-300 to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '>Tailwind <i className="lni lni-tailwindcss text-blue-300"></i></div>:null
}
{
    boolLocation.bootstrap?<div className=' bg-gradient-to-r from-[#6F20F4] to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '>Bootstrap <i className="lni text-[#6F20F4] lni-bootstrap-5"></i></div>:null
}
{
    boolLocation.rails?<div  className=' bg-gradient-to-r from-white to-[#E81321] m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Rails <SiRubyonrails className='text-white inline-block'/></div>:null
}
{
    boolLocation.dotnet?<div className=' bg-gradient-to-r from-purple-500 to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> .NET <SiDotnet className='text-white bg-purple-500 rounded-full inline-block'/></div>:null
}
{
    boolLocation.csharp?<div  className=' bg-gradient-to-r from-purple-400 to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> C# <SiCsharp className='text-purple-400 bg-white rounded-full inline-block'/></div>:null
}
{
    boolLocation.cplus?<div  className=' bg-gradient-to-r from-blue-500 to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> C++ <SiCplusplus className='text-blue-500 bg-white rounded-full inline-block'/></div>:null
}
{
    boolLocation.django?<div className=' bg-gradient-to-r from-white to-[#113E2E] m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Django <SiDjango className='text-white rounded-md inline-block'/></div>:null
}
{
    boolLocation.vercel?<div  className=' bg-black text-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Vercel <SiVercel className=' text-white rounded-md inline-block'/></div>:null
}
{
    boolLocation.nextjs?<div  className=' bg-gradient-to-r from-black to-white text-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Nextjs <SiNextdotjs className=' text-black rounded-md inline-block'/></div>:null
}
{
    boolLocation.nuxtjs?<div  className=' bg-gradient-to-r from-[#03D57E] to-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Nuxtjs <SiNuxtdotjs className='  rounded-md inline-block'/></div>:null
}
{
    boolLocation.supabase?<div  className=' bg-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> supabase <SiSupabase className=' text-[#3DC88A] rounded-md inline-block'/></div>:null
}
{
    boolLocation.npm?<div className=' bg-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> npm <DiNpm className=' text-[#C43635] rounded-md inline-block'/></div>:null
}
{
    boolLocation.tensorflow?<div  className=' bg-white text-[#425066] m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> TensorFlow <SiTensorflow className=' text-[#F68901] rounded-md inline-block'/></div>:null
}
{
    boolLocation.keras?<div className=' bg-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Keras <SiKeras className=' text-[#D10000]  inline-block'/></div>:null
}
{
    boolLocation.numpy?<div  className=' bg-white text-[#4C78D0] m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Numpy <SiNumpy className=' text-[#4CACD0]  inline-block'/></div>:null
}
{
    boolLocation.pandas?<div  className=' bg-white text-[#58528A] m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Pandas <SiPandas className=' text-[#58528A]  inline-block'/></div>:null
}
{
    boolLocation.pytorch?<div  className=' bg-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> PyTorch <SiPytorch className=' text-[#EE4B2B]  inline-block'/></div>:null
}
{
    boolLocation.redux?<div  className=' bg-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Redux <SiRedux className=' text-[#7649BD]  inline-block'/></div>:null
}
{
    boolLocation.graphql?<div className=' bg-white text-[#E535AB] m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> GraphQL <SiGraphql className=' text-[#E535AB]  inline-block'/></div>:null
}
{
    boolLocation.express?<div  className=' bg-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Express <SiExpress className='  inline-block'/></div>:null
}
{
    boolLocation.golang?<div  className=' bg-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Golang <SiGo className=' text-[#04ADD9]  inline-block'/></div>:null
}
{
    boolLocation.flutter?<div className=' bg-gradient-to-r from-[#00B8F7] to-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Flutter <SiFlutter className=' text-[#00B8F7]  inline-block'/></div>:null
}
{
    boolLocation.kotlin?<div className=' bg-gradient-to-r from-[#158ED9] via-[#EA764B] to-[#5F7BFF] text-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Kotlin <SiKotlin className=' text-white scale-75  inline-block'/></div>:null
}
{
    boolLocation.swift?<div  className=' bg-gradient-to-r from-[#FBA43D]  to-[#FF3D29] text-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Swift <SiSwift className=' text-white -mt-1 inline-block'/></div>:null
}
{
    boolLocation.phoenix?<div className=' bg-[#453532] text-white m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> Phoenix <FontAwesomeIcon className='text-[#FC5000]' icon={faPhoenixFramework}/></div>:null
}
{
    boolLocation.jquery?<div className=' bg-white text-black m-1 p-1 inline-block rounded-md cursor-pointer shadow-custom '> JQuery <SiJquery className=' text-[#0168AD]  inline-block'/></div>:null
}
</>
  )
}

export default Technologies
