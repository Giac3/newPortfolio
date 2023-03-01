import React, { useState } from "react";
import { SiGithub, SiWebstorm } from "react-icons/si";
import { useSpring, animated } from "react-spring";
import { CgWebsite} from "react-icons/cg"
import Technologies from "./Technologies";
import ScrollContainer from 'react-indiana-drag-scroll'

const Card = ({imagen}:any) => {


    const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
    className="bg-blue-200 w-[300px] border-2 border-white p-2 rounded-md"
    style={props3}
    onMouseEnter={() => setShown(true)}
    onMouseLeave={() => setShown(false)}
  >
    <div>
        <div className="flex flex-row">
    <div className=" w-[80px] mr-10 h-20 ml-10 border-2 mb-4 border-white rounded-md">
    <a href={imagen.gitLink}  rel="noopener noreferrer" target="_blank" className= "font-display bg-green-200 hover:text-white flex-col -m-[2px] shadow-custom2 -rotate-90 cursor-pointer duration-300 hover:bg-yellow-200 w-20 absolute    h-[80px] flex items-center justify-center gap-2 rounded-md ">
            <SiGithub className="scale-150" /> Code
        </a>
    </div>
    <div className=" w-[80px] mr-10 h-20 border-2 mb-4 border-white rounded-md">
    <a href={imagen.link}  rel="noopener noreferrer" target="_blank" className="font-display bg-green-200 hover:text-white flex-col -m-[2px] -rotate-90 cursor-pointer duration-300 hover:bg-yellow-200 w-20 absolute    h-[80px] flex items-center justify-center gap-2 rounded-md shadow-custom2">
            <CgWebsite className="scale-150" /> Visit 
        </a>
    </div>
    </div>
    <div className="flex flex-row">
    <div>
    <div className=" w-56 h-64 border-2 mb-4 flex items-center border-white rounded-3xl">
        <p className="-rotate-90 w-64 h-50  relative rounded-md p-1 font-display text-xs bg-red-200 shadow-md">{imagen.description}</p>
    </div>
    <div className=" w-56 h-64  flex items-center justify-center  rounded-md  ">
        
        <img src={imagen.image} className="-rotate-90 w-[230px] h-[230px]   scale-[1.1] rounded-md  "/>
    </div>
    </div>
    <div className=" w-20 h-[530px] border-2 flex items-center  ml-2 border-white rounded-md">
        <div className="-rotate-90 flex overflow-hidden w-[525px] mb-5 left-0 absolute">
        
        <Technologies boolLocation={imagen.tech} />
        
        </div>
    </div>
    </div>
    </div>
    
  </animated.div>
  )
}

export default Card
