import React from 'react'
import { RiAddCircleFill } from "react-icons/ri";

interface IdeaCreateButtonProps {
    toggleIdeaEditor: () => void
}

const IdeaCreateButton: React.FC<IdeaCreateButtonProps> = ({ toggleIdeaEditor }) => {
  return (
    <>
        {/* <div className="rounded-2xl btn btn-primary"> */}
        <div className='scale-300'>
            <RiAddCircleFill onClick={toggleIdeaEditor} className='text-secondary'/>
        </div>
    </>
  )
}

export default IdeaCreateButton