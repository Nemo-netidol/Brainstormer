import React from 'react'
import { GiBrain } from "react-icons/gi";

interface NavBarProps {
  toggleChat: () => void;
}

const Navbar: React.FC<NavBarProps> = ({toggleChat}) => {
  return (
   <>
        <div className="h-14 flex fitems-center justify-end px-10 py-10 ">
            <div className="justify-between flex-row flex w-48 h-14 items-center">
              <button onClick={toggleChat} type="button" className='btn btn-accent scale-110'><GiBrain className='scale-150' /> Ask AI</button>
            
            <div className="w-12 h-12 rounded-4xl bg-black overflow-hidden">
              <img src='../public/avatar-male.png'/>
            </div>
            </div>
        </div>
   </>
  )
}

export default Navbar