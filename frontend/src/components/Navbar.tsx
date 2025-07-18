import React from "react";
import { GiBrain } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  toggleChat: () => void;
}

const Navbar: React.FC<NavBarProps> = ({ toggleChat }) => {
  
  const navigate = useNavigate();
  const handleGoToLandingPage = () => {
    navigate('/')
  }
  
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl " onClick={handleGoToLandingPage}>Brainstormer</a>
        </div>
        <div className="flex gap-2">
          <button onClick={toggleChat} type="button" className='btn btn-accent scale-100 mr-10'><GiBrain className='scale-150' /> Ask AI</button>

          <div className="dropdown dropdown-end mr-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="avatar-male.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
