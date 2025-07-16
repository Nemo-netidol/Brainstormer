import React from "react";
import ChatMockUp from "../database/chatMockUp";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col pt-6 pb-2 px-2 w-3xl h-96 rounded-b-2xl bg-base-200 shadow-md">
        <div className="flex-1 overflow-y-auto">
          <ChatMockUp/>
        </div>
        {/* input & submit button */}
        <div className="flex items-center p-2 border-t border-base-300 bg-base-200">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Type a message..."
          />
          <button className="btn btn-primary ml-2">
            #
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
