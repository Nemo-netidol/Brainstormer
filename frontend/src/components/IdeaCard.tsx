import React, { useEffect, useState } from 'react'
import type { IdeaComponent } from "../Interface"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface IdeaCardProps {
  idea: IdeaComponent
}



const IdeaCard: React.FC<IdeaCardProps> = ({idea}) => {

  const [likes, setLikes] = useState(idea.likeCount);

  const likeIdea = () => {
    setLikes((prev) => prev + 1);
    
  };

  useEffect(() => {console.log(`User ${idea.username} got a like! Like count = ${likes + 1}`);}, [likes])

  return (
    <div className=' w-72  rounded-2xl p-4 flex-col bg-base-300 text-text flex flex-cols' onClick={likeIdea}>
        <div className="flex flex-row mt-2">
            <div className="rounded-4xl w-8 h-8 overflow-hidden mr-2">
                <img src='../public/avatar-male.png'/>
            </div>
            <div className="">{idea.username}</div>
        </div>
        <div className="my-4">
            <p className='text-sm leading-relaxed'>{idea.idea}</p>
        </div>
        <div className="">
          <hr className='my-2' />
          <div className="flex flex-row items-center">
            <div className="w-4 h-4 mr-1">
              <FaRegHeart className='text-red-500 '/>
              {/* <FaHeart className='text-red-500'/> */}
            </div>
            <p>{likes}</p>
          </div>
        </div>
    </div>
  )
}

export default IdeaCard