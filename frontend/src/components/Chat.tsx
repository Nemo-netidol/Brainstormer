import React from "react";
import { chatMockUp } from "../database/chatMockUp";
import { IoIosSend } from "react-icons/io";
import type { Message } from "../Interface";



const Chat = () => {
  return (
    <>
      <div className="flex flex-col pt-10 pb-2 px-2 w-3xl h-112 rounded-b-2xl bg-base-200 shadow-md">
        <div className="flex-1 overflow-y-auto">
          {chatMockUp.map( (msg)=>(msg.role == "user" ? 

            <div className="chat chat-end mb-5">
            <div className="chat-bubble">
              {msg.content}
            </div>
          </div>
           : 
           <div className="chat chat-start mb-5">
            <div className="chat-bubble">
              {msg.content}
            </div>
          </div>
           
           ) )}
        </div>
        {/* input & submit button */}
        <div className="flex items-center p-2 border-t border-base-300 bg-base-200">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Type a message..."
          />
          <button className="btn btn-primary ml-2">
            <IoIosSend className="scale-150"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
