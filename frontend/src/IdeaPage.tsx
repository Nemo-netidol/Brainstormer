import React, { useState } from "react";
import Navbar from "./components/Navbar";
import IdeaCard from "./components/IdeaCard";

import { ideas } from "./database/ideas";
import Chat from "./components/Chat";
import IdeaCreateButton from "./components/IdeaCreateButton";
import IdeaEditor from "./components/IdeaEditor";

const IdeaPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [showIdeaEditor, setShowEditor] = useState(false)

  return (
    <>
      <div
        className={`
                  fixed left-1/2 transform -translate-x-1/2 z-50
                  transition-opacity duration-300
                  ${showChat ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
      >
        {showChat && <Chat />}
      </div>

      <Navbar toggleChat={() => setShowChat((prev) => !prev)} />
      <div className="m-5">
        <div className="mb-30">
          <p className="opacity-50">Nakorn BOONPRASONG</p>
          <p className="text-4xl font-semibold text-secondary">
            Bio-engineered Symbiotic Habitats
          </p>
          <p className="text-sm">Description</p>
        </div>

        {/* idea grid */}
        <div className="mt-4 grid grid-cols-4 gap-8 items-start ">
          {ideas.map((idea, index) => (
            <IdeaCard key={index} idea={idea} />
          ))}
        </div>
      </div>
      <div className=" fixed bottom-0 right-0">
          <div className="absolute bottom-0 right-30">
            {showIdeaEditor && <IdeaEditor closeEditor={()=> setShowEditor(false)}/>}
          </div>
          <div className="mr-15 mb-10">
            <IdeaCreateButton toggleIdeaEditor={ ()=>{setShowEditor((prev) => !prev)} }/>
          </div>

      </div>
    </>
  );
};

export default IdeaPage;
