import React from 'react'
import { IoClose } from "react-icons/io5";

interface IdeaEditorProps {
  closeEditor: () => void
}

const IdeaEditor: React.FC<IdeaEditorProps> = ({ closeEditor }) => {
  return (
    <>
      <div className="flex flex-col bg-base-300 w-96 h-116 rounded-b-2xl p-4">
          <div className="flex justify-between rounded-3xl w-full" >
            <button className='btn bg-base-100' onClick={closeEditor}><IoClose className='scale-150'/></button>
            <button className='btn btn-primary rounded-2xl text-[16px]'>Submit</button>
          </div>
          <textarea className='textarea w-full mt-5 pt-5 h-full text-start align-top'
                 placeholder='write your idea...'/>
      </div>
    </>
  )
}

export default IdeaEditor